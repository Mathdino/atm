import { gsap, ScrollTrigger, Flip, Observer } from './gsap.js';

const SLIDES = [
  {
    caption: 'UNIDADE 01 — PUFFER STASIS / AZUL FROST / SHELL ABAIXO DE ZERO',
    a: 'NÃO PRA MUITOS <br />PRA&nbsp;&nbsp;POUCOS',
    b: 'ENGENHARIA PRO FRIO<br />NÃO PRA MULTIDÃO',
  },
  {
    caption: 'UNIDADE 02 — VOLUME / CINZA GLACIAL / GRANDE ALTITUDE',
    a: 'VOLUME ACIMA<br />DO RUÍDO&nbsp;&nbsp;SEMPRE',
    b: 'VOLUME CALCULADO<br />NÃO DECORAÇÃO',
  },
  {
    caption: 'UNIDADE 03 — PROTOCOLO SHELL / BRANCO POLAR / TRAVA VENTO',
    a: 'O SILÊNCIO É<br />A&nbsp;&nbsp;FICHA',
    b: 'TESTADO ACIMA<br />DAS NUVENS',
  },
];

const DWELL = 4.2; // seconds a slide holds before advancing
const TRAVEL = 0.9; // seconds an advance takes

/**
 * "FOR USERS, NOT VIEWERS" carousel.
 *
 * The three figures are the slides. Advancing reorders them in the DOM and lets
 * Flip animate the difference, so each figure physically travels between the
 * side and centre positions — the one leaving the front rail loops around the
 * back, dipping in scale and opacity on the way. Nothing swaps `src`.
 *
 * Driving it: one paused timeline owns both the dwell and the progress bar, so
 * pause/resume can never desync them. Observer adds drag and swipe, and the
 * whole thing idles while off screen.
 */
export function initTrioCarousel() {
  const root = document.querySelector('[data-trio]');
  if (!root) return null;

  const caption = document.querySelector('[data-trio-caption]');
  const indexEl = document.querySelector('[data-trio-index]');
  const claimA = document.querySelector('[data-claim="a"]');
  const claimB = document.querySelector('[data-claim="b"]');
  const dotsHost = document.querySelector('[data-trio-dots]');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /** The slide sitting in the centre is always the middle child. */
  const centreIndex = () => Number(root.children[1].dataset.slide);

  /* ── dots ──────────────────────────────────────────────── */
  const dots = SLIDES.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `Unidade 0${i + 1}`);
    b.innerHTML = '<i></i>';
    b.addEventListener('click', () => {
      const steps = i - centreIndex();
      if (steps) go(steps > 1 ? steps - SLIDES.length : steps < -1 ? steps + SLIDES.length : steps, true);
    });
    dotsHost.appendChild(b);
    return b;
  });
  const dotBars = dots.map((d) => d.firstElementChild);
  const setBar = dotBars.map((bar) => gsap.quickSetter(bar, 'scaleX'));

  function paintDots() {
    const active = centreIndex();
    dots.forEach((d, i) => {
      d.classList.toggle('is-on', i === active);
      d.setAttribute('aria-current', i === active ? 'true' : 'false');
      if (i !== active) setBar[i](0);
    });
  }

  /* ── copy swaps, staggered behind the figures ──────────── */
  function swapText(el, html, delay) {
    if (!el || el.innerHTML === html) return;
    gsap
      .timeline({ delay })
      .to(el, { yPercent: -24, opacity: 0, duration: 0.28, ease: 'power2.in' })
      .add(() => {
        el.innerHTML = html;
      })
      .fromTo(
        el,
        { yPercent: 28, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, ease: 'expo.out' },
      );
  }

  function paintCopy() {
    const s = SLIDES[centreIndex()];
    if (indexEl) indexEl.textContent = String(centreIndex() + 1).padStart(2, '0');
    swapText(caption, s.caption, 0.12);
    swapText(claimA, s.a, 0.06);
    swapText(claimB, s.b, 0.14);
    paintDots();
  }

  /* ── the move itself ───────────────────────────────────── */
  let flip;

  function go(steps = 1, manual = false) {
    if (!steps) return;
    if (flip && flip.isActive()) return;

    const items = [...root.children];

    // Flip measures the current layout, so anything still animating these
    // figures — the section's entrance reveal, a previous dip — has to land
    // first, or the two fight over the same properties.
    gsap.getTweensOf(items).forEach((t) => t.progress(1));

    const state = Flip.getState(items, { props: 'opacity' });

    // the figure that leaves the rail is the one that has to loop around
    const looping = steps > 0 ? items[0] : items[items.length - 1];

    for (let n = Math.abs(steps); n > 0; n--) {
      if (steps > 0) root.appendChild(root.firstElementChild);
      else root.insertBefore(root.lastElementChild, root.firstElementChild);
    }

    // Each Flip leaves an inline opacity behind. Left in place, the next Flip
    // would read that stale value as the target instead of the one the new
    // slot's CSS gives, and the highlight would drift off the centre figure.
    gsap.set(items, { clearProps: 'opacity' });

    if (reduced) {
      paintCopy();
      if (manual) restart();
      return;
    }

    flip = Flip.from(state, {
      duration: TRAVEL,
      ease: 'power3.inOut',
      absolute: true,
      scale: true,
      onComplete: () => gsap.set(items, { clearProps: 'zIndex,filter' }),
    });

    // Send the wrapping figure behind the others and let it duck out of the
    // way. Flip already owns opacity (and transform), so the dip rides on
    // filter — animating opacity here would fight Flip and strand an inline
    // value on a figure that lands in a side slot.
    gsap.set(looping, { zIndex: 0 });
    gsap.set(items.filter((el) => el !== looping), { zIndex: 3 });
    gsap
      .timeline()
      .to(looping, { filter: 'brightness(0.45)', duration: TRAVEL * 0.4, ease: 'power2.in' })
      .to(looping, { filter: 'brightness(1)', duration: TRAVEL * 0.6, ease: 'power2.out' });

    paintCopy();
    if (manual) restart();
  }

  /* ── autoplay: one clock for the dwell and the bar ─────── */
  const auto = gsap.timeline({ repeat: -1, paused: true });
  auto.to(
    {},
    {
      duration: DWELL,
      ease: 'none',
      onUpdate() {
        setBar[centreIndex()](this.progress());
      },
      onComplete: () => go(1),
    },
  );

  function restart() {
    auto.restart(true);
    if (!playable) auto.pause();
  }

  let playable = false;
  let hovered = false;

  function sync() {
    if (playable && !hovered && !reduced) auto.play();
    else auto.pause();
  }

  /* ── input ─────────────────────────────────────────────── */
  Observer.create({
    target: root,
    type: 'touch,pointer',
    dragMinimum: 24,
    tolerance: 20,
    onLeft: () => go(1, true),
    onRight: () => go(-1, true),
    onPress: () => {
      hovered = true;
      sync();
    },
    onRelease: () => {
      hovered = false;
      sync();
    },
  });

  root.addEventListener('pointerenter', () => {
    hovered = true;
    sync();
  });
  root.addEventListener('pointerleave', () => {
    hovered = false;
    sync();
  });
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') go(1, true);
    else if (e.key === 'ArrowLeft') go(-1, true);
  });

  // only spend frames on it while it is on screen
  const st = ScrollTrigger.create({
    trigger: root,
    start: 'top 94%',
    end: 'bottom 6%',
    onToggle: (self) => {
      playable = self.isActive;
      sync();
    },
  });

  paintCopy();

  const api = {
    go,
    pause: () => auto.pause(),
    debug: () => ({ playable, hovered, paused: auto.paused(), progress: auto.progress(), stActive: st.isActive, stStart: Math.round(st.start), stEnd: Math.round(st.end), scroll: Math.round(st.scroll()) }),
  };
  if (import.meta.env.DEV) window.__carousel = api;
  return api;
}
