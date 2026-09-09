import { gsap, ScrollTrigger } from './gsap.js';
import { renderCards, initCardHovers } from './cards.js';
import { runPreloader } from './preloader.js';
import { initNav } from './nav.js';
import { heroIntro, initScenes, initSmoother, initResponsive } from './anim.js';
import { createFrost } from './three/frost.js';
import { initCart } from './cart.js';

const params = new URLSearchParams(location.search);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const skipIntro = params.get('intro') === '0';

if (params.has('fast')) gsap.globalTimeline.timeScale(Number(params.get('fast')) || 6);

if (import.meta.env.DEV && params.has('solo')) {
  // render one section at the top of the page (headless capture helper)
  document.addEventListener('DOMContentLoaded', () => {
    const keep = params.get('solo');
    document.querySelectorAll('#smooth-content > *').forEach((el) => {
      if (!el.matches(keep)) el.style.display = 'none';
    });
  });
}

if (import.meta.env.DEV && params.has('nofx')) {
  document.addEventListener('DOMContentLoaded', () => {
    const which = params.get('nofx') || 'all';
    if (which === 'hero') document.querySelector('.hero').style.display = 'none';
    if (which === 'all' || which === 'canvas') document.getElementById('frost')?.remove();
    if (which === 'all' || which === 'wc') document.getElementById('smooth-content').style.willChange = 'auto';
    if (which === 'all' || which === 'clip')
      document.querySelectorAll('.card__media, .feature, .thumb').forEach((e) => (e.style.clipPath = 'none'));
    if (which === 'all' || which === 'blend')
      document.querySelectorAll('.card__img').forEach((e) => (e.style.mixBlendMode = 'normal'));
  });
}

if (import.meta.env.DEV) {
  // dev-only handles so the layout can be inspected without waiting on rAF
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.settle = (s = 6) => {
    ScrollTrigger.update();
    gsap.globalTimeline.time(gsap.globalTimeline.time() + s);
    return true;
  };
}

function bootFrost() {
  if (reduced) return null;
  const canvas = document.getElementById('frost');
  const frost = createFrost(canvas, {
    count: window.innerWidth < 760 ? 520 : 1250,
    ticker: gsap.ticker,
  });
  if (!frost) return null;
  if (import.meta.env.DEV) window.frost = frost;

  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => frost.setScroll(self.scroll()),
  });

  return frost;
}

function setOptionPickers() {
  document.querySelectorAll('[data-pick]').forEach((group) => {
    group.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('button').forEach((b) => b.classList.remove('is-on'));
        btn.classList.add('is-on');
        gsap.fromTo(btn, { scale: 0.86 }, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
      });
    });
  });
}

async function boot() {
  // markup first: ScrollTrigger needs the final layout height
  renderCards();

  initSmoother();
  initNav();
  initCart();
  setOptionPickers();
  initCardHovers();

  // hold the hero until the intro clears
  gsap.set(
    [
      '.hero__title .line > span',
      '[data-hero-line]',
      '.hero__thumbs .thumb',
      '.hero__counter',
      '.hero__social',
    ],
    { visibility: 'hidden' },
  );

  // don't let a slow/failed webfont hold the intro hostage
  await Promise.race([
    document.fonts?.ready ?? Promise.resolve(),
    new Promise((r) => setTimeout(r, 2500)),
  ]);

  if (!reduced && !skipIntro) {
    await runPreloader();
  } else {
    document.getElementById('preloader').style.display = 'none';
    document.body.classList.remove('is-locked');
  }

  gsap.set(
    [
      '.hero__title .line > span',
      '[data-hero-line]',
      '.hero__thumbs .thumb',
      '.hero__counter',
      '.hero__social',
    ],
    { visibility: 'visible' },
  );

  if (!reduced && !skipIntro) heroIntro();
  else gsap.set('.frost-canvas', { opacity: 0.8 });

  initScenes();
  initResponsive();
  bootFrost();

  // late-loading imagery can change section heights
  window.addEventListener('load', () => ScrollTrigger.refresh());

  if (import.meta.env.DEV && params.has('hover')) {
    setTimeout(() => {
      document.querySelectorAll('[data-card]').forEach((c) => c._tl?.progress(1));
    }, 600);
  }

  if (import.meta.env.DEV && params.has('probe')) {
    setTimeout(() => {
      const r = (sel) => {
        const e = document.querySelector(sel);
        if (!e) return 'X';
        const b = e.getBoundingClientRect();
        const c = getComputedStyle(e);
        return [sel, Math.round(b.top), Math.round(b.height), c.opacity, c.visibility].join('|');
      };
      document.title =
        'PROBE ' +
        [
          'scrollY=' + window.scrollY,
          'vh=' + window.innerHeight,
          'cw=' + document.documentElement.clientWidth,
          'sw=' + document.documentElement.scrollWidth,
          'iw=' + window.innerWidth,
          'docH=' + document.documentElement.scrollHeight,
          r('.hero'),
          r('.collection'),
          r('.collection .sec-title'),
          r('[data-feature]'),
          r('.card'),
          r('.card__media'),
        ].join(' ~ ');
    }, 1200);
  }

  if (import.meta.env.DEV && params.has('y')) {
    const y = Number(params.get('y')) || 0;
    setTimeout(() => {
      ScrollTrigger.refresh();
      window.scrollTo(0, y);
      ScrollTrigger.update();
    }, 400);
  }
}

function start() {
  // a throw inside an async boot is otherwise swallowed into an unhandled
  // rejection with a truncated stack
  boot().catch((err) => console.error('[ATM] boot failed:', err));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
