import { gsap, ScrollTrigger } from './gsap.js';
import { PRODUCTS } from './data.js';
import { tagSVG } from './scribble.js';

let uid = 0;

/** Single source of truth for how a price is written on the page. */
export function formatBRL(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function cardMarkup(p, i) {
  const swatches = p.colors
    .map((c) => `<span><i style="background:${c.hex}"></i>${c.label}</span>`)
    .join('');

  return `<article class="card${p.mobileOnly ? ' card--fill' : ''}" data-card
  data-product data-name="${p.name}" data-sub="${p.sub}" data-price="${p.price}" data-img="${p.img}">
  <div class="card__media"${p.dark ? ' data-dark' : ''}>
    ${tagSVG(uid++)}
    <img class="card__img" data-fly src="${p.img}" alt="${p.name} — ${p.sub}" loading="lazy" decoding="async" />
    <div class="card__shade"></div>
    <span class="card__index">/${String(i + 1).padStart(2, '0')}</span>
    <button type="button" class="card__reveal" data-add
            aria-label="Adicionar ${p.name} à sacola">
      <strong class="card__price display" data-target="${p.price}">${formatBRL(0)}</strong>
      <span class="card__cta">ADICIONAR <i>&#8599;</i></span>
    </button>
  </div>
  <div class="card__info">
    <p class="card__name"><b>${p.name}</b><span>${p.sub}</span></p>
    <div class="card__swatches">${swatches}</div>
  </div>
</article>`;
}

/** Renders every `[data-grid]` container from PRODUCTS. */
export function renderCards() {
  document.querySelectorAll('[data-grid]').forEach((host) => {
    const list = PRODUCTS[host.dataset.grid];
    if (!list) return;
    host.innerHTML = list.map(cardMarkup).join('');
  });
}

/**
 * Hover choreography per card:
 *   · the graffiti tag draws itself behind the product
 *   · a #647d8e bar rises with the price and the cart action
 *   · the price counts up from zero, and counts back to zero on leave
 * Reversed on pointer leave. Touch devices drive the same timeline from scroll.
 */
/** Everything a card's choreography needs, looked up once. */
function cardParts(card) {
  const priceEl = card.querySelector('.card__price');
  return {
    strokes: card.querySelectorAll('.card__scribble .tag-ink path'),
    wipe: card.querySelector('.card__scribble .tag-fill'),
    svg: card.querySelector('.card__scribble'),
    reveal: card.querySelector('.card__reveal'),
    priceEl,
    img: card.querySelector('.card__img'),
    shade: card.querySelector('.card__shade'),
    target: Number(priceEl.dataset.target) || 0,
  };
}

/** Sprays the tag on behind the product. */
function drawTag({ svg, strokes, wipe }, tl = gsap.timeline(), at = 0) {
  return tl
    .to(svg, { opacity: 1, duration: 0.12 }, at)
    .to(
      strokes,
      { drawSVG: '0% 100%', duration: 0.52, ease: 'none', stagger: { each: 0.13, from: 'start' } },
      at,
    )
    .fromTo(
      wipe,
      { attr: { x: -906 } },
      { attr: { x: 0 }, duration: 0.62, ease: 'power1.inOut' },
      at + 0.16,
    );
}

/** Counts the price up to its target, writing it as it goes. */
function priceCounter({ priceEl, target }) {
  const counter = { v: 0 };
  const paint = () => {
    priceEl.textContent = formatBRL(counter.v);
  };
  return { counter, paint, set: (v) => ((counter.v = v), paint()) };
}

/* ── pointer devices: hover drives the whole card ──────── */
function setupHover(card) {
  const parts = cardParts(card);
  const { reveal, img, shade } = parts;
  const price = priceCounter(parts);
  price.set(0);

  gsap.set(parts.strokes, { drawSVG: '0% 0%' });

  const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });
  drawTag(parts, tl, 0)
    .to(shade, { opacity: 1, duration: 0.6 }, 0)
    .to(img, { scale: 1.04, duration: 1, ease: 'power2.out' }, 0)
    .to(reveal, { y: 0, duration: 0.62, ease: 'expo.out' }, 0.08)
    .to(
      price.counter,
      { v: parts.target, duration: 0.95, ease: 'power2.out', onUpdate: price.paint },
      0.12,
    );

  card._tl = tl;

  const enter = () => tl.timeScale(1).play();
  const leave = () => tl.timeScale(1.6).reverse();
  card.addEventListener('pointerenter', enter);
  card.addEventListener('pointerleave', leave);

  return () => {
    card.removeEventListener('pointerenter', enter);
    card.removeEventListener('pointerleave', leave);
    tl.kill();
    card._tl = null;
    gsap.set([reveal, img, shade, parts.svg], { clearProps: 'all' });
  };
}

/* ── touch: the price is on screen from the start ──────── */
function setupTouch(card) {
  const parts = cardParts(card);
  const price = priceCounter(parts);

  // no hover to trigger it, so the bar is simply up and the price is written
  gsap.set(parts.reveal, { y: 0 });
  gsap.set(parts.strokes, { drawSVG: '0% 0%' });
  gsap.set(parts.svg, { opacity: 0 });
  price.set(parts.target);

  // the tag still gets its moment — once, as the card arrives
  const st = ScrollTrigger.create({
    trigger: card,
    start: 'top 88%',
    once: true,
    onEnter: () => drawTag(parts),
  });

  card._tl = null;

  return () => {
    st.kill();
    gsap.set([parts.reveal, parts.svg], { clearProps: 'all' });
    price.set(0);
  };
}

/**
 * Card choreography, split in two.
 *
 * The hover sequence needs a pointer *and* room: keying on `(hover: hover)`
 * alone left a narrow desktop window — a mouse at 375px wide — on the hover
 * path, so the price stayed hidden with nothing to reveal it. Width is part of
 * the condition, and the two queries are mutually exclusive so only one context
 * is ever live.
 */
const HOVER_MQ = '(hover: hover) and (min-width: 861px)';
const EXPOSED_MQ = '(hover: none), (max-width: 860px)';

export function initCardHovers() {
  const cards = gsap.utils.toArray('[data-card]');
  const mm = gsap.matchMedia();

  mm.add(HOVER_MQ, () => {
    const cleanups = cards.map(setupHover);
    return () => cleanups.forEach((fn) => fn());
  });

  mm.add(EXPOSED_MQ, () => {
    const cleanups = cards.map(setupTouch);
    return () => cleanups.forEach((fn) => fn());
  });

  return mm;
}

