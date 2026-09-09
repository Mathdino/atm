import { gsap, ScrollTrigger, ScrollSmoother, SplitText } from './gsap.js';
import { initTrioCarousel } from './carousel.js';
import { tagSVG } from './scribble.js';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── smooth scrolling ───────────────────────────────────── */
export function initSmoother() {
  if (reduced) return null;
  if (new URLSearchParams(location.search).get('smooth') === '0') return null;
  return ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.15,
    effects: true,
    smoothTouch: false,
    normalizeScroll: false,
  });
}

/* ── helpers ────────────────────────────────────────────── */
function splitLines(scope) {
  return gsap.utils.toArray(scope);
}

function charReveal(el, start = 'top 86%') {
  // no `mask` option here: the display face overflows its line box, so a
  // per-character mask would clip the ascenders
  const split = SplitText.create(el, { type: 'chars' });
  gsap.from(split.chars, {
    yPercent: 55,
    opacity: 0,
    duration: 0.9,
    ease: 'expo.out',
    stagger: { each: 0.018, from: 'start' },
    scrollTrigger: { trigger: el, start, once: true },
  });
  return split;
}

/* ═══════════════════════════ HERO ENTRANCE ═══════════════════════════ */
export function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  tl.from('.hero__mountain', { yPercent: -14, scale: 1.1, opacity: 0, duration: 1.8 }, 0)
    .from('.hero__graffiti', { opacity: 0, scale: 1.14, duration: 2 }, 0.1)
    .from(
      '.hero__figure',
      { yPercent: 16, scale: 1.06, opacity: 0, duration: 1.7, ease: 'power3.out' },
      0.12,
    )
    .from('.hero__title .line > span', { yPercent: 118, duration: 1.3, stagger: 0.09 }, 0.3)
    .from('[data-hero-line]', { y: 26, opacity: 0, duration: 1, stagger: 0.08 }, 0.62)
    .from('.hero__thumbs .thumb', { yPercent: 22, opacity: 0, duration: 1.1, stagger: 0.1 }, 0.68)
    .from('.hero__counter, .hero__social', { opacity: 0, y: 14, duration: 0.9, stagger: 0.08 }, 0.9)
    .from('.nav__logo, .nav__links a, .nav__tools > *', {
      y: -18,
      opacity: 0,
      duration: 0.9,
      stagger: 0.05,
    }, 0.35)
    .to('.frost-canvas', { opacity: 0.8, duration: 2 }, 0.6);

  return tl;
}

/* ═══════════════════════════ SCROLL SCENES ═══════════════════════════ */
export function initScenes() {
  if (new URLSearchParams(location.search).get('still') === '1') {
    initThumbs();
    initTrioCarousel();
    initMarquee();
    return;
  }

  /* ── generic reveals ─────────────────────────────────── */
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.from(batch, {
        y: 30,
        opacity: 0,
        duration: 1.05,
        ease: 'expo.out',
        stagger: 0.09,
        overwrite: true,
      }),
  });

  gsap.utils.toArray('[data-split]').forEach((el) => charReveal(el));

  /* ── hero → collection handoff ───────────────────────── */
  gsap.to('.hero__figure', {
    yPercent: -18,
    scale: 0.94,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to('.hero__graffiti', {
    yPercent: 26,
    xPercent: 6,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to('.hero__mountain', {
    yPercent: 22,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  /* ── thumbnail carousel ──────────────────────────────── */
  initThumbs();

  /* ── AURORA feature card ─────────────────────────────── */
  initFeature();
  gsap.to('.feature__img', {
    yPercent: -9,
    ease: 'none',
    scrollTrigger: { trigger: '[data-feature]', start: 'top bottom', end: 'bottom top', scrub: true },
  });
  gsap.to('.feature__bg', {
    xPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: '[data-feature]', start: 'top bottom', end: 'bottom top', scrub: true },
  });

  /* ── product grids ───────────────────────────────────── */
  ScrollTrigger.batch('.card', {
    start: 'top 92%',
    once: true,
    batchMax: 5,
    interval: 0.12,
    onEnter: (batch) =>
      gsap.from(batch, {
        y: 54,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.07,
        overwrite: true,
      }),
  });

  /* ── manifesto ───────────────────────────────────────── */
  gsap.fromTo(
    '[data-mf-bg] img',
    { yPercent: -8, scale: 1.16 },
    {
      yPercent: 8,
      scale: 1.02,
      ease: 'none',
      scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: true },
    },
  );
  gsap.from('.manifesto__title .line > span', {
    yPercent: 118,
    duration: 1.25,
    ease: 'expo.out',
    stagger: 0.1,
    scrollTrigger: { trigger: '.manifesto__title', start: 'top 88%', once: true },
  });

  /* ── users panel ─────────────────────────────────────── */
  gsap.from('[data-panel]', {
    clipPath: 'inset(0% 0% 100% 0%)',
    duration: 1.5,
    ease: 'expo.inOut',
    scrollTrigger: { trigger: '[data-panel]', start: 'top 82%', once: true },
  });

  // entrance only — once the carousel is live, Flip owns these transforms
  gsap.from('.trio__item', {
    yPercent: 24,
    opacity: 0,
    duration: 1.3,
    ease: 'expo.out',
    stagger: { each: 0.12, from: 'center' },
    scrollTrigger: { trigger: '.trio', start: 'top 84%', once: true },
  });

  gsap.fromTo(
    '.claim--a',
    { xPercent: -14 },
    {
      xPercent: 4,
      ease: 'none',
      scrollTrigger: { trigger: '.panel__claims', start: 'top bottom', end: 'bottom top', scrub: 1 },
    },
  );
  gsap.fromTo(
    '.claim--b',
    { xPercent: 14 },
    {
      xPercent: -4,
      ease: 'none',
      scrollTrigger: { trigger: '.panel__claims', start: 'top bottom', end: 'bottom top', scrub: 1 },
    },
  );

  /* ── cold section ────────────────────────────────────── */
  gsap.from('.cold__title .line > span, .cold__sub .line > span', {
    yPercent: 118,
    duration: 1.2,
    ease: 'expo.out',
    stagger: 0.09,
    scrollTrigger: { trigger: '.cold', start: 'top 72%', once: true },
  });

  gsap.from('[data-cold-jacket]', {
    yPercent: 18,
    rotate: -7,
    opacity: 0,
    scale: 0.94,
    duration: 1.6,
    ease: 'expo.out',
    scrollTrigger: { trigger: '.cold__jacket', start: 'top 88%', once: true },
  });
  gsap.to('[data-cold-jacket]', {
    yPercent: -12,
    rotate: 4,
    ease: 'none',
    scrollTrigger: { trigger: '.cold', start: 'top bottom', end: 'bottom top', scrub: 1 },
  });
  gsap.fromTo(
    '[data-cold-tag]',
    { clipPath: 'inset(0% 100% 0% 0%)', opacity: 0 },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 0.9,
      duration: 1.6,
      ease: 'power1.inOut',
      scrollTrigger: { trigger: '.cold__jacket', start: 'top 78%', once: true },
    },
  );

  /* ── card lab ────────────────────────────────────────── */
  initAnatomy();
  gsap.fromTo(
    '[data-lab-tag]',
    { clipPath: 'inset(0% 100% 0% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.5,
      ease: 'power1.inOut',
      scrollTrigger: { trigger: '[data-lab-tag]', start: 'top 88%', once: true },
    },
  );

  /* ── FOR USERS auto carousel ─────────────────────────── */
  initTrioCarousel();

  /* ── footer marquee ──────────────────────────────────── */
  initMarquee();

  ScrollTrigger.refresh();
}

/* ── UNIT ANATOMY ──────────────────────────────────────── */
/**
 * A technical read-out that assembles itself: the frame wipes open, the garment
 * settles in, then the lead lines draw out to their anchor points and the
 * callouts slide in from the edges. Both halves are scrubbed — one range builds
 * it as the section arrives, a second one takes it apart as the section leaves,
 * so scrolling either way plays the matching direction.
 */
function initAnatomy() {
  const root = document.querySelector('[data-anatomy]');
  if (!root) return;

  const frame = root.querySelector('.anatomy__frame');
  const unit = root.querySelector('.anatomy__unit');
  const leads = root.querySelectorAll('.anatomy__leads path');
  const ticks = root.querySelectorAll('.anatomy__ticks path');
  const dots = root.querySelectorAll('.anatomy__dots circle');
  const calls = gsap.utils.toArray('[data-call]');
  const scale = root.querySelectorAll('.anatomy__scale i');

  const fromEdge = (i, el) => (el.classList.contains('anatomy__call--l') ? -30 : 30);

  gsap.set([leads, ticks], { drawSVG: '0% 0%' });
  gsap.set(dots, { scale: 0, transformOrigin: '50% 50%' });

  /* build */
  const build = gsap
    .timeline({
      scrollTrigger: { trigger: root, start: 'top 82%', end: 'top 24%', scrub: 0.8 },
    })
    .from(frame, { clipPath: 'inset(0% 100% 0% 0%)', duration: 1, ease: 'power2.inOut' }, 0)
    .from(unit, { yPercent: 12, scale: 1.06, opacity: 0, duration: 1, ease: 'power2.out' }, 0.1)
    .to(ticks, { drawSVG: '0% 100%', duration: 0.35, stagger: 0.08, ease: 'none' }, 0.5)
    .to(leads, { drawSVG: '0% 100%', duration: 0.5, stagger: 0.08, ease: 'none' }, 0.58)
    .to(dots, { scale: 1, duration: 0.3, stagger: 0.08, ease: 'back.out(2.4)' }, 0.86)
    .from(
      calls,
      { x: fromEdge, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
      0.62,
    )
    .from(scale, { scaleY: 0, transformOrigin: '50% 100%', duration: 0.4, stagger: 0.04 }, 0.7);

  /* take apart */
  const teardown = gsap
    .timeline({
      scrollTrigger: { trigger: root, start: 'bottom 74%', end: 'bottom 8%', scrub: 0.8 },
    })
    .to(calls, { x: fromEdge, opacity: 0, duration: 0.5, stagger: 0.06, ease: 'power2.in' }, 0)
    .to(dots, { scale: 0, duration: 0.3, stagger: 0.06 }, 0.1)
    .to(leads, { drawSVG: '100% 100%', duration: 0.5, stagger: 0.06, ease: 'none' }, 0.14)
    .to(ticks, { drawSVG: '100% 100%', duration: 0.3, stagger: 0.05, ease: 'none' }, 0.3)
    .to(unit, { yPercent: -14, opacity: 0, duration: 0.7, ease: 'power2.in' }, 0.34)
    .to(frame, { clipPath: 'inset(0% 0% 0% 100%)', duration: 0.8, ease: 'power2.inOut' }, 0.5);

  if (import.meta.env.DEV) {
    window.__anatomy = () => ({
      build: build.scrollTrigger.progress,
      teardown: teardown.scrollTrigger.progress,
      tdStart: Math.round(teardown.scrollTrigger.start),
      tdEnd: Math.round(teardown.scrollTrigger.end),
      scroll: Math.round(teardown.scrollTrigger.scroll()),
      callOpacity: getComputedStyle(calls[0]).opacity,
    });
  }

}

/* ── AURORA feature card ───────────────────────────────── */
/**
 * The card opens with a clip reveal, the tag is sprayed on behind the garment
 * with the same stroke mask the product cards use, then AURORA lands letter by
 * letter and the cart chip rises. Hovering redraws the tag and lifts the type.
 */
function initFeature() {
  const card = document.querySelector('[data-feature]');
  const host = card?.querySelector('[data-feature-bg]');
  const title = card?.querySelector('.feature__body h3');
  if (!card || !host || !title) return;

  host.innerHTML = tagSVG('feature', { className: 'feature__tag', fill: '#e8f1f8' });

  const svg = host.querySelector('svg');
  const strokes = host.querySelectorAll('.tag-ink path');
  const wipe = host.querySelector('.tag-fill');
  const img = card.querySelector('.feature__img');
  const cta = card.querySelector('.feature__cta');
  const chars = SplitText.create(title, { type: 'chars' }).chars;

  gsap.set(svg, { opacity: 0 });
  gsap.set(strokes, { drawSVG: '0% 0%' });

  /** Draws the tag on from nothing. Reused by the intro and by hover. */
  const draw = (at = 0) => {
    const tl = gsap.timeline();
    tl.set(strokes, { drawSVG: '0% 0%' }, 0)
      .set(wipe, { attr: { x: -906 } }, 0)
      .to(svg, { opacity: 1, duration: 0.12 }, 0)
      .to(strokes, { drawSVG: '0% 100%', duration: 0.34, ease: 'none', stagger: 0.06 }, 0)
      .fromTo(
        wipe,
        { attr: { x: -906 } },
        { attr: { x: 0 }, duration: 0.46, ease: 'power1.inOut' },
        0.12,
      );
    return tl.delay(at);
  };

  // fires earlier and lands in about a second — the old timing left the card
  // sitting empty for most of the way up the viewport
  const intro = gsap.timeline({
    scrollTrigger: { trigger: card, start: 'top 94%', once: true },
  });

  intro
    .from(card, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.66, ease: 'expo.inOut' }, 0)
    .from(img, { scale: 1.1, duration: 1, ease: 'expo.out' }, 0)
    .add(draw(), 0.14)
    .from(
      chars,
      { yPercent: 70, opacity: 0, duration: 0.5, ease: 'expo.out', stagger: 0.018 },
      0.26,
    )
    .from(cta, { y: 18, opacity: 0, duration: 0.45, ease: 'expo.out' }, 0.44);

  // hover: redraw the tag, nudge the garment, ripple the letters
  const hover = gsap
    .timeline({ paused: true, defaults: { ease: 'power2.out' } })
    .to(img, { scale: 1.045, duration: 1.1 }, 0)
    .to(host, { opacity: 0.9, duration: 0.6 }, 0)
    .to(chars, { yPercent: -12, duration: 0.5, ease: 'expo.out', stagger: 0.018 }, 0)
    .to(chars, { yPercent: 0, duration: 0.55, ease: 'expo.out', stagger: 0.018 }, 0.16);

  card.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'touch' || intro.progress() < 1) return;
    hover.restart();
    draw();
  });
  card.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'touch') return;
    gsap.to(img, { scale: 1, duration: 0.9, ease: 'power2.out' });
    gsap.to(host, { opacity: 0.62, duration: 0.6 });
  });
}

/* ── hero look switcher ────────────────────────────────── */
/**
 * Three looks share two slots: whichever is in the hero sits alone, the other
 * two sit in the rail on the right. Clicking one of those swaps it with the
 * hero shot, so the outgoing look takes the slot the incoming one just left.
 */
const LOOKS = [
  { full: '/banner/banner-1.png', mini: '/banner/banner1-mini.png', label: 'Look frontal' },
  { full: '/banner/banner-2-cut.png', mini: '/banner/banner2-mini.png', label: 'Look gloss' },
  { full: '/banner/banner-3-cut.png', mini: '/banner/banner3-mini.png', label: 'Look de perfil' },
];

function initThumbs() {
  const thumbs = gsap.utils.toArray('[data-thumbs] .thumb');
  const now = document.querySelector('.c-now');
  const fill = document.querySelector('.c-rail b');
  const main = document.querySelector('[data-hero-figure] img');
  if (!main || thumbs.length !== 2) return;

  // swapping should never wait on a network round trip
  LOOKS.forEach((l) => {
    const img = new Image();
    img.src = l.full;
  });

  // order[0] is in the hero, order[1] and order[2] are the rail
  let order = [0, 1, 2];
  let busy = false;

  function paintRail(animate) {
    thumbs.forEach((btn, i) => {
      const look = LOOKS[order[i + 1]];
      const img = btn.querySelector('img');
      btn.setAttribute('aria-label', look.label);
      if (!animate) {
        img.src = look.mini;
        img.alt = look.label;
        return;
      }
      if (img.getAttribute('src') === look.mini) return;
      gsap
        .timeline()
        .to(img, { opacity: 0, yPercent: 8, duration: 0.24, ease: 'power2.in' })
        .add(() => {
          img.src = look.mini;
          img.alt = look.label;
        })
        .fromTo(
          img,
          { opacity: 0, yPercent: 10 },
          { opacity: 1, yPercent: 0, duration: 0.65, ease: 'expo.out' },
        );
    });
  }

  function paintCounter() {
    now.textContent = String(order[0] + 1).padStart(2, '0');
    gsap.to(fill, { scaleX: (order[0] + 1) / LOOKS.length, duration: 0.7 });
  }

  function select(slot) {
    if (busy) return;
    busy = true;

    // the look leaving the hero drops into the slot the incoming one vacated
    [order[0], order[slot + 1]] = [order[slot + 1], order[0]];

    gsap
      .timeline({ onComplete: () => { busy = false; } })
      .to(main, { opacity: 0, yPercent: 5, scale: 1.03, duration: 0.34, ease: 'power2.in' })
      .add(() => {
        main.src = LOOKS[order[0]].full;
        main.alt = LOOKS[order[0]].label;
        paintRail(true);
        paintCounter();
      })
      .to(main, { opacity: 1, yPercent: 0, scale: 1, duration: 0.9, ease: 'expo.out' });
  }

  thumbs.forEach((btn, i) => btn.addEventListener('click', () => select(i)));

  main.src = LOOKS[order[0]].full;
  paintRail(false);
  paintCounter();
}

/* ── infinite footer marquee ───────────────────────────── */
function initMarquee() {
  const track = document.querySelector('[data-marquee] .foot__track');
  if (!track) return;

  const loop = gsap.to(track, {
    xPercent: -50,
    duration: 26,
    ease: 'none',
    repeat: -1,
  });

  // scroll direction flips the marquee
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const dir = self.direction === -1 ? -1 : 1;
      gsap.to(loop, { timeScale: dir * (1 + Math.min(Math.abs(self.getVelocity()) / 2200, 2.2)), duration: 0.4, overwrite: true });
    },
  });
}

/* ── responsive tuning ─────────────────────────────────── */
export function initResponsive() {
  const mm = gsap.matchMedia();

  mm.add('(min-width: 861px)', () => {
    // pointer-follow drift on the hero figure
    const fig = document.querySelector('[data-hero-figure]');
    const graf = document.querySelector('[data-hero-graffiti]');
    if (!fig) return;

    const xTo = gsap.quickTo(fig, 'x', { duration: 0.9, ease: 'power3' });
    const yTo = gsap.quickTo(fig, 'y', { duration: 0.9, ease: 'power3' });
    const gxTo = gsap.quickTo(graf, 'x', { duration: 1.3, ease: 'power3' });

    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      xTo(nx * 34);
      yTo(ny * 18);
      gxTo(nx * -52);
    };
    window.addEventListener('pointermove', onMove);

    return () => {
      window.removeEventListener('pointermove', onMove);
      gsap.set([fig, graf], { x: 0, y: 0 });
    };
  });

  mm.add('(max-width: 860px)', () => {
    // lighter parallax budget on small screens
    ScrollTrigger.config({ ignoreMobileResize: true });
  });

  return mm;
}

export { splitLines };
