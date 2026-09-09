/**
 * Background remover for studio shots.
 *
 * A plain colour key eats highlights inside the garment, so this flood-fills
 * from the image border instead: only background pixels that are *connected*
 * to an edge get cleared, and the alpha ramps across the tolerance band so the
 * cutout keeps a soft edge.
 *
 *   node tools/cutout.mjs <in.png> <out.png> <white|black> [tolerance] [feather]
 */
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [, , input, output, mode = 'white', tolRaw = '26', featherRaw = '2', closeRaw = '6', erodeRaw = '2', repairRaw = '0'] = process.argv;
if (!input || !output) {
  console.error('usage: node tools/cutout.mjs <in.png> <out.png> <white|black> [tol] [feather] [close]');
  process.exit(1);
}

const tol = Number(tolRaw);
const feather = Number(featherRaw); // blur passes on the alpha edge
const closePasses = Number(closeRaw); // majority passes that swallow noise speckles
const erodePasses = Number(erodeRaw); // erosion passes that shave edge stubs
const repairTol = Number(repairRaw); // second, stricter tolerance used to undo over-cutting

/* ── decode to raw RGBA via ffmpeg ─────────────────────── */
const probe = spawnSync('ffprobe', [
  '-v', 'error', '-select_streams', 'v:0',
  '-show_entries', 'stream=width,height',
  '-of', 'csv=p=0', input,
]);
const [W, H] = probe.stdout.toString().trim().split(',').map(Number);

const rawPath = join(tmpdir(), `cutout-${process.pid}.raw`);
spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', input, '-f', 'rawvideo', '-pix_fmt', 'rgba', rawPath]);
const buf = readFileSync(rawPath);

/* ── blurred decision buffer ───────────────────────────── */
// Block artefacts along the silhouette read as "not background" pixel by pixel.
// Deciding on a blurred copy smooths them away; the alpha is still applied to
// the sharp original.
const dec = new Uint8Array(W * H * 3);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = y * W + x;
    let r = 0, g = 0, b = 0, n = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const q = (ny * W + nx) * 4;
        r += buf[q]; g += buf[q + 1]; b += buf[q + 2]; n++;
      }
    }
    dec[p * 3] = (r / n) | 0;
    dec[p * 3 + 1] = (g / n) | 0;
    dec[p * 3 + 2] = (b / n) | 0;
  }
}

/* ── flood fill from every border pixel ────────────────── */
const isBgAt = (p, t) => {
  const q = p * 3;
  const r = dec[q], g = dec[q + 1], b = dec[q + 2];
  return mode === 'white'
    ? r >= 255 - t && g >= 255 - t && b >= 255 - t
    : r <= t && g <= t && b <= t;
};

function floodFill(t, barrier) {
  const seen = new Uint8Array(W * H);
  const stack = [];
  for (let x = 0; x < W; x++) stack.push(x, (H - 1) * W + x);
  for (let y = 0; y < H; y++) stack.push(y * W, y * W + W - 1);

  while (stack.length) {
    const p = stack.pop();
    if (seen[p] || (barrier && barrier[p]) || !isBgAt(p, t)) continue;
    seen[p] = 1;
    const x = p % W;
    const y = (p / W) | 0;
    if (x > 0) stack.push(p - 1);
    if (x < W - 1) stack.push(p + 1);
    if (y > 0) stack.push(p - W);
    if (y < H - 1) stack.push(p + W);
  }
  return seen;
}

// distance from the keyed colour, used to feather the cut edge
const distance = (i) => {
  const r = buf[i], g = buf[i + 1], b = buf[i + 2];
  return mode === 'white'
    ? 255 - Math.min(r, g, b)
    : Math.max(r, g, b);
};

/**
 * A tolerance loose enough to swallow the block artefacts welded to the
 * silhouette can also leak through a highlight into the subject — a white
 * helmet against a white backdrop. So first run a strict pass, keep only its
 * *large* solid regions (the subject; the artefacts are small and scattered),
 * and use those as a barrier the loose fill cannot cross.
 */
function buildMask() {
  if (repairTol <= 0) return floodFill(tol);

  const strictBg = floodFill(repairTol);
  const barrier = new Uint8Array(W * H);
  const seen = new Uint8Array(W * H);
  const minSolid = Math.round(W * H * 0.01);

  for (let start = 0; start < W * H; start++) {
    if (seen[start] || strictBg[start]) continue;

    const blob = [];
    const queue = [start];
    seen[start] = 1;
    while (queue.length) {
      const p = queue.pop();
      blob.push(p);
      const x = p % W;
      const y = (p / W) | 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx, ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
          const q = ny * W + nx;
          if (seen[q] || strictBg[q]) continue;
          seen[q] = 1;
          queue.push(q);
        }
      }
    }

    if (blob.length >= minSolid) for (const p of blob) barrier[p] = 1;
  }

  return floodFill(tol, barrier);
}

const visited = buildMask();

/* ── close speckles left by compression noise ──────────── */
// A pixel surrounded by background is background, even if its own colour drifted
// outside the tolerance. Repeated majority passes clear the noise without
// touching the subject, whose interior has few background neighbours.
for (let pass = 0; pass < closePasses; pass++) {
  const src = Uint8Array.from(visited);
  let changed = 0;
  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      const p = y * W + x;
      if (src[p]) continue;
      const n =
        src[p - W - 1] + src[p - W] + src[p - W + 1] +
        src[p - 1] + src[p + 1] +
        src[p + W - 1] + src[p + W] + src[p + W + 1];
      if (n >= 6) {
        visited[p] = 1;
        changed++;
      }
    }
  }
  if (!changed) break;
}

/* ── drop islands ──────────────────────────────────────── */
// Compression noise survives the fill as small opaque blobs. Anything that is
// not part of a large connected region is background too.
{
  const minArea = Math.max(400, Math.round(W * H * 0.002));
  const seen = new Uint8Array(W * H);

  for (let start = 0; start < W * H; start++) {
    if (seen[start] || visited[start]) continue;

    const blob = [];
    const queue = [start];
    seen[start] = 1;

    while (queue.length) {
      const p = queue.pop();
      blob.push(p);
      const x = p % W;
      const y = (p / W) | 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
          const q = ny * W + nx;
          if (seen[q] || visited[q]) continue;
          seen[q] = 1;
          queue.push(q);
        }
      }
    }

    if (blob.length < minArea) for (const p of blob) visited[p] = 1;
  }
}

/* ── trim edge spikes ──────────────────────────────────── */
// Block artefacts leave thin stubs welded to the silhouette; two erosion passes
// shave them without eating into the garment.
for (let pass = 0; pass < erodePasses; pass++) {
  const src = Uint8Array.from(visited);
  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      const p = y * W + x;
      if (src[p]) continue;
      const n =
        src[p - W - 1] + src[p - W] + src[p - W + 1] +
        src[p - 1] + src[p + 1] +
        src[p + W - 1] + src[p + W] + src[p + W + 1];
      if (n >= 4) visited[p] = 1;
    }
  }
}

/* ── apply alpha, then soften the boundary ─────────────── */
let cleared = 0;
for (let p = 0; p < W * H; p++) {
  if (!visited[p]) continue;
  buf[p * 4 + 3] = 0;
  cleared++;
}

// box-blur the alpha channel a couple of passes so the cut edge is not aliased
for (let pass = 0; pass < feather; pass++) {
  const src = new Uint8Array(W * H);
  for (let p = 0; p < W * H; p++) src[p] = buf[p * 4 + 3];

  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      const p = y * W + x;
      // only soften pixels that sit next to the cut, never solid interior
      if (src[p] === 255 && src[p - 1] === 255 && src[p + 1] === 255 && src[p - W] === 255 && src[p + W] === 255) continue;
      const sum =
        src[p - W - 1] + src[p - W] + src[p - W + 1] +
        src[p - 1] + src[p] + src[p + 1] +
        src[p + W - 1] + src[p + W] + src[p + W + 1];
      buf[p * 4 + 3] = (sum / 9) | 0;
    }
  }
}

writeFileSync(rawPath, buf);
spawnSync('ffmpeg', [
  '-y', '-loglevel', 'error',
  '-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${W}x${H}`, '-i', rawPath,
  '-frames:v', '1', output,
]);
unlinkSync(rawPath);

console.log(`${output}  ${W}x${H}  cleared ${((cleared / (W * H)) * 100).toFixed(1)}%`);
