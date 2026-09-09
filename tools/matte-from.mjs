/**
 * Borrows the alpha of a small, already-matted cutout and applies it to the
 * full-resolution original.
 *
 * Needed when the subject and the backdrop share the same value — banner-2's
 * white helmet sits at 243-251 against a 254-255 paper backdrop, so no
 * luminance threshold can separate them. The supplied mini has a proper matte;
 * this registers it against the full frame (uniform scale + offset, solved from
 * the silhouette bounding boxes) and resamples its alpha.
 *
 *   node tools/matte-from.mjs <full.png> <mini.png> <out.png> [bgTolerance]
 */
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [, , fullPath, miniPath, outPath, tolRaw = '6'] = process.argv;
if (!fullPath || !miniPath || !outPath) {
  console.error('usage: node tools/matte-from.mjs <full.png> <mini.png> <out.png> [bgTol]');
  process.exit(1);
}
const tol = Number(tolRaw);

function load(file) {
  const probe = spawnSync('ffprobe', [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file,
  ]);
  const [W, H] = probe.stdout.toString().trim().split(',').map(Number);
  const raw = join(tmpdir(), `matte-${process.pid}-${Math.random().toString(36).slice(2)}.raw`);
  spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', file, '-f', 'rawvideo', '-pix_fmt', 'rgba', raw]);
  const data = readFileSync(raw);
  unlinkSync(raw);
  return { W, H, data };
}

const full = load(fullPath);
const mini = load(miniPath);

/* ── silhouette of the full frame: flood the white backdrop from the border ── */
const { W, H, data } = full;
const bg = new Uint8Array(W * H);
{
  const isBg = (p) => {
    const i = p * 4;
    return data[i] >= 255 - tol && data[i + 1] >= 255 - tol && data[i + 2] >= 255 - tol;
  };
  const stack = [];
  for (let x = 0; x < W; x++) stack.push(x, (H - 1) * W + x);
  for (let y = 0; y < H; y++) stack.push(y * W, y * W + W - 1);
  while (stack.length) {
    const p = stack.pop();
    if (bg[p] || !isBg(p)) continue;
    bg[p] = 1;
    const x = p % W;
    const y = (p / W) | 0;
    if (x > 0) stack.push(p - 1);
    if (x < W - 1) stack.push(p + 1);
    if (y > 0) stack.push(p - W);
    if (y < H - 1) stack.push(p + W);
  }
}

// the silhouette is the largest connected non-background region — anything else
// is compression noise floating in the backdrop
function largestBlobBBox() {
  const seen = new Uint8Array(W * H);
  let best = null;
  for (let start = 0; start < W * H; start++) {
    if (seen[start] || bg[start]) continue;
    let x0 = W, y0 = H, x1 = -1, y1 = -1, area = 0;
    const queue = [start];
    seen[start] = 1;
    while (queue.length) {
      const p = queue.pop();
      area++;
      const x = p % W;
      const y = (p / W) | 0;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx, ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
          const q = ny * W + nx;
          if (seen[q] || bg[q]) continue;
          seen[q] = 1;
          queue.push(q);
        }
      }
    }
    if (!best || area > best.area) best = { x0, y0, x1, y1, area, w: x1 - x0 + 1, h: y1 - y0 + 1 };
  }
  return best;
}

function alphaBBox(img, thr = 40) {
  let x0 = img.W, y0 = img.H, x1 = -1, y1 = -1;
  for (let y = 0; y < img.H; y++) {
    for (let x = 0; x < img.W; x++) {
      if (img.data[(y * img.W + x) * 4 + 3] > thr) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  return { x0, y0, x1, y1, w: x1 - x0 + 1, h: y1 - y0 + 1 };
}

const bf = largestBlobBBox();
const bm = alphaBBox(mini);

// Width is the reliable dimension: the jacket's left and right edges sit well
// clear of the backdrop in both images. Height is not — the backdrop tolerance
// that keeps the silhouette clean also eats into the white helmet, and both
// frames are cropped at the bottom. So take the scale from width and solve the
// offset by maximising silhouette overlap.
const scale = bf.w / bm.w;

console.log(`full silhouette ${bf.w}x${bf.h} at ${bf.x0},${bf.y0}`);
console.log(`mini silhouette ${bm.w}x${bm.h} at ${bm.x0},${bm.y0}`);
console.log(`scale from width: ${scale.toFixed(3)}`);

// coarse grids to keep the search cheap
const STEP = 4;
const gw = Math.ceil(W / STEP);
const gh = Math.ceil(H / STEP);
const refGrid = new Uint8Array(gw * gh);
for (let gy = 0; gy < gh; gy++) {
  for (let gx = 0; gx < gw; gx++) {
    const p = Math.min(H - 1, gy * STEP) * W + Math.min(W - 1, gx * STEP);
    refGrid[gy * gw + gx] = bg[p] ? 0 : 1;
  }
}

const miniAt = (mx, my) =>
  mx >= 0 && my >= 0 && mx < mini.W && my < mini.H
    ? mini.data[((my | 0) * mini.W + (mx | 0)) * 4 + 3] > 128
      ? 1
      : 0
    : 0;

let best = { score: -1, dx: 0, dy: 0 };
for (let dy = -260; dy <= 260; dy += 4) {
  for (let dx = -60; dx <= 60; dx += 4) {
    let inter = 0;
    let union = 0;
    for (let gy = 0; gy < gh; gy++) {
      for (let gx = 0; gx < gw; gx++) {
        const x = gx * STEP;
        const y = gy * STEP;
        const m = miniAt(bm.x0 + (x - bf.x0 - dx) / scale, bm.y0 + (y - bf.y0 - dy) / scale);
        const r = refGrid[gy * gw + gx];
        if (m | r) union++;
        if (m & r) inter++;
      }
    }
    const score = union ? inter / union : 0;
    if (score > best.score) best = { score, dx, dy };
  }
}

console.log(`best offset dx=${best.dx} dy=${best.dy} IoU=${best.score.toFixed(3)}`);
if (best.score < 0.7) {
  console.error('silhouettes do not register well enough — refusing to guess');
  process.exit(2);
}

const offX = best.dx;
const offY = best.dy;

/* ── resample the mini alpha into the full frame ─────────── */
let filled = 0;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    // map full-frame pixel back into mini space
    const mx = bm.x0 + (x - bf.x0 - offX) / scale;
    const my = bm.y0 + (y - bf.y0 - offY) / scale;

    let a = 0;
    if (mx >= 0 && my >= 0 && mx < mini.W - 1 && my < mini.H - 1) {
      // bilinear on the alpha channel
      const x0 = Math.floor(mx), y0 = Math.floor(my);
      const fx = mx - x0, fy = my - y0;
      const at = (px, py) => mini.data[(py * mini.W + px) * 4 + 3];
      a =
        at(x0, y0) * (1 - fx) * (1 - fy) +
        at(x0 + 1, y0) * fx * (1 - fy) +
        at(x0, y0 + 1) * (1 - fx) * fy +
        at(x0 + 1, y0 + 1) * fx * fy;
    }
    data[(y * W + x) * 4 + 3] = Math.max(0, Math.min(255, Math.round(a)));
    if (a > 200) filled++;
  }
}

const raw = join(tmpdir(), `matte-out-${process.pid}.raw`);
writeFileSync(raw, data);
spawnSync('ffmpeg', [
  '-y', '-loglevel', 'error',
  '-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${W}x${H}`, '-i', raw,
  '-frames:v', '1', outPath,
]);
unlinkSync(raw);

console.log(`${outPath}  ${W}x${H}  subject ${((filled / (W * H)) * 100).toFixed(1)}%`);
