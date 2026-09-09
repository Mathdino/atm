/**
 * Hand-authored graffiti tag, split into strokes in writing order.
 * Drawn behind the product on hover with DrawSVGPlugin, so the mark appears to
 * be sprayed onto the card plate one stroke at a time.
 *
 * Geometry traced from public/logo.png: the tag occupies roughly x 20-280,
 * y 130-290 of the 300x400 viewBox (matching the 3:4 card media box).
 */
export const TAG_STROKES = [
  // 1 — stem of the "t", carried down into the leading swoosh and the long
  //     sweep that underlines the whole word
  {
    d:
      'M107,131 C103,145 100,159 99,172 ' +
      'C97,192 95,206 93,214 ' +
      'C74,223 54,227 39,222 ' +
      'C75,215 128,211 189,215',
    w: 9,
  },

  // 2 — the "u": down, across the bowl, back up
  {
    d: 'M117,176 C114,200 113,223 117,236 C123,245 133,246 138,237 C140,214 139,193 138,177',
    w: 8.4,
  },

  // 3 / 4 — the two "s" strokes
  { d: 'M171,183 C161,197 151,207 147,215 C157,221 167,223 171,229 C167,237 157,241 148,238', w: 8.4 },
  { d: 'M198,183 C188,197 178,207 174,215 C184,221 194,223 198,229 C194,237 184,241 175,238', w: 8.4 },

  // 5 — the "y" and its hook
  { d: 'M213,190 C211,213 210,233 214,245 C218,255 226,251 228,240', w: 8.4 },

  // 6 — long horizontal crossbar with bulbous ends
  { d: 'M46,166 C88,160 148,157 204,161', w: 10.5 },

  // 7 / 8 — umlaut dots
  { d: 'M128,152 l0.6,0.6', w: 11.5 },
  { d: 'M139,154 l0.6,0.6', w: 11.5 },

  // 9 — the terminal flourish, running past the baseline into a drip
  { d: 'M239,173 C241,202 240,232 241,260 C242,274 243,281 240,286', w: 9 },
];

/**
 * Coverage note: the hand-traced centrelines do not touch every part of the
 * artwork, so the mask also carries a soft wipe that lags a little behind the
 * strokes. The strokes lead and give the writing motion; the wipe guarantees
 * the whole tag is uncovered by the time the animation lands.
 *
 * The tag artwork is a raster (the supplied ass-produto.svg is a PNG in an SVG
 * wrapper — no vector paths), so it cannot be stroked directly. Instead the
 * strokes above become a mask: as they draw on, they uncover the real artwork
 * underneath, which reads as the tag being written stroke by stroke.
 *
 * The artwork sits at x 20-280, y 130-286 — the same box the stroke geometry
 * was traced in, so the two line up.
 */
const ART = { href: '/ass-produto.png', x: 20, y: 130, w: 260, h: 156 };

/**
 * Builds the `<svg>` markup for a tag reveal.
 * @param {string|number} id  unique suffix — the filter and masks are per-instance
 * @param {{className?: string, fill?: string}} [opts]
 */
export function tagSVG(id, { className = 'card__scribble', fill = '#7c9ab4' } = {}) {
  const paths = TAG_STROKES.map((s) => `<path d="${s.d}" />`).join('');

  return `<svg class="${className}" viewBox="6 112 288 192" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <filter id="ink-blur-${id}" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.6" />
    </filter>
    <linearGradient id="wipe-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#fff" stop-opacity="1" />
      <stop offset="72%" stop-color="#fff" stop-opacity="1" />
      <stop offset="100%" stop-color="#fff" stop-opacity="0" />
    </linearGradient>
    <mask id="tag-art-${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="400">
      <image href="${ART.href}" x="${ART.x}" y="${ART.y}" width="${ART.w}" height="${ART.h}" />
    </mask>
    <mask id="tag-ink-${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="400">
      <g class="tag-ink" fill="none" stroke="#fff" stroke-width="40"
         stroke-linecap="round" stroke-linejoin="round" filter="url(#ink-blur-${id})">
        ${paths}
      </g>
      <rect class="tag-fill" x="-900" y="108" width="900" height="200" fill="url(#wipe-${id})" />
    </mask>
  </defs>
  <g mask="url(#tag-ink-${id})">
    <rect x="0" y="0" width="300" height="400" fill="${fill}" mask="url(#tag-art-${id})" />
  </g>
</svg>`;
}
