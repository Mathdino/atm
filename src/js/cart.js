import { gsap, ScrollSmoother } from './gsap.js';
import { formatBRL } from './cards.js';
import { revealNav } from './nav.js';

/**
 * Sacola.
 *
 * Holds the lines in memory, keeps the badge on the nav icon in sync, and opens
 * a drawer with the running total. Adding an item flies a clone of the product
 * shot into the cart icon: `x` and `y` are tweened with different eases so the
 * clone travels on an arc instead of a straight diagonal.
 */

const lines = [];
let ui = null;

/* ── state ─────────────────────────────────────────────── */
const count = () => lines.reduce((n, l) => n + l.qty, 0);
const total = () => lines.reduce((n, l) => n + l.qty * l.price, 0);

function keyOf(item) {
  return `${item.name}|${item.sub}`;
}

/* ── badge ─────────────────────────────────────────────── */
function paintBadge(bump) {
  const n = count();
  ui.badge.textContent = n > 9 ? '9+' : String(n);
  ui.badge.classList.toggle('is-on', n > 0);
  ui.openBtn.setAttribute('aria-label', n ? `Sacola, ${n} item(ns)` : 'Sacola');

  if (!bump) return;
  gsap
    .timeline()
    .to(ui.openBtn, { scale: 0.88, duration: 0.1, ease: 'power2.in' })
    .to(ui.openBtn, { scale: 1, duration: 0.45, ease: 'elastic.out(1, 0.45)' })
    .fromTo(ui.badge, { scale: 0.4 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' }, 0.06);
}

/* ── drawer contents ───────────────────────────────────── */
function rowMarkup(l, i) {
  return `<article class="cart__row" data-row="${i}">
  <div class="cart__thumb"><img src="${l.img}" alt="" /></div>
  <div class="cart__info">
    <b>${l.name}</b>
    <span>${l.sub}</span>
    <div class="cart__qty">
      <button type="button" data-step="-1" aria-label="Remover uma unidade de ${l.name}">–</button>
      <em>${l.qty}</em>
      <button type="button" data-step="1" aria-label="Adicionar uma unidade de ${l.name}">+</button>
    </div>
  </div>
  <div class="cart__line">
    <strong class="display">${formatBRL(l.qty * l.price)}</strong>
    <button type="button" class="cart__drop" data-drop aria-label="Remover ${l.name}">retirar</button>
  </div>
</article>`;
}

function render(animateRows) {
  ui.list.innerHTML = lines.length
    ? lines.map(rowMarkup).join('')
    : `<p class="cart__empty tech">SACOLA VAZIA<span>ADICIONE UMA PEÇA PARA COMEÇAR</span></p>`;

  ui.total.textContent = formatBRL(total());
  ui.summary.textContent = lines.length
    ? `${count()} ITEM(NS) · ${lines.length} REFERÊNCIA(S)`
    : 'NENHUM ITEM';
  ui.checkout.disabled = lines.length === 0;

  if (animateRows) {
    gsap.from(ui.list.children, {
      x: 26,
      opacity: 0,
      duration: 0.5,
      ease: 'expo.out',
      stagger: 0.06,
    });
  }
}

/* ── open / close ──────────────────────────────────────── */
let open = false;

function setOpen(next) {
  if (open === next) return;
  open = next;

  ui.root.classList.toggle('is-open', open);
  ui.root.setAttribute('aria-hidden', String(!open));
  ScrollSmoother.get()?.paused(open);

  if (open) {
    render(true);
    gsap
      .timeline()
      .set(ui.root, { pointerEvents: 'auto' })
      .to(ui.backdrop, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0)
      .fromTo(
        ui.panel,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.62, ease: 'expo.out' },
        0,
      );
    ui.closeBtn.focus();
  } else {
    gsap
      .timeline({ onComplete: () => gsap.set(ui.root, { pointerEvents: 'none' }) })
      .to(ui.panel, { xPercent: 100, duration: 0.45, ease: 'expo.in' }, 0)
      .to(ui.backdrop, { opacity: 0, duration: 0.35 }, 0.05);
    ui.openBtn.focus();
  }
}

/* ── the flight ────────────────────────────────────────── */
function fly(sourceImg) {
  if (!sourceImg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const from = sourceImg.getBoundingClientRect();
  const to = ui.openBtn.getBoundingClientRect();
  if (!from.width) return;

  // The section artwork is far bigger than a card shot (760px against 269px),
  // and a clone that size crossing the page reads as a different effect. Cap the
  // take-off size and keep it centred on the source so every flight matches.
  const MAX = 260;
  const k = Math.min(1, MAX / from.width);
  const w = from.width * k;
  const h = from.height * k;

  const clone = document.createElement('img');
  clone.src = sourceImg.currentSrc || sourceImg.src;
  clone.alt = '';
  clone.className = 'cart-fly';
  clone.style.left = `${from.left + (from.width - w) / 2}px`;
  clone.style.top = `${from.top + (from.height - h) / 2}px`;
  clone.style.width = `${w}px`;
  clone.style.height = `${h}px`;
  document.body.appendChild(clone);

  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  const flight = 0.8;

  gsap
    .timeline({ onComplete: () => clone.remove() })
    // different eases on x and y bend the path into an arc
    .to(clone, { x: dx, duration: flight, ease: 'power1.in' }, 0)
    .to(clone, { y: dy, duration: flight, ease: 'power2.in' }, 0)
    .to(clone, { scale: 0.1, rotate: -18, duration: flight, ease: 'power2.in' }, 0)
    .to(clone, { opacity: 0, duration: 0.22, ease: 'power1.in' }, flight - 0.22);

  return flight;
}

/* ── public: add a line ────────────────────────────────── */
export function addToCart(item, sourceImg) {
  if (!ui) return;

  const key = keyOf(item);
  const found = lines.find((l) => keyOf(l) === key);
  if (found) found.qty += 1;
  else lines.push({ ...item, qty: 1 });

  // the badge is the feedback, so the header has to be on screen to show it
  revealNav();

  const flight = fly(sourceImg);

  // the badge lands as the clone arrives, not before it leaves
  gsap.delayedCall(flight ? flight * 0.82 : 0, () => paintBadge(true));
  if (open) render(true);
}

/* ── wiring ────────────────────────────────────────────── */
/**
 * Where the clone takes off from.
 *
 * On a product card the shot lives inside the `[data-product]` host, but the
 * section CTAs (hero, AURORA, ICEFIELD) sit in a container that is a *sibling*
 * of the artwork — so those declare `data-fly-from` with a selector instead.
 */
function flySource(host) {
  if (!host) return null;
  if (host.dataset.flyFrom) return document.querySelector(host.dataset.flyFrom);
  return host.querySelector('[data-fly]') || host.querySelector('img');
}

function readItem(el) {
  const host = el.closest('[data-product]');
  if (!host) return null;
  return {
    name: host.dataset.name,
    sub: host.dataset.sub,
    price: Number(host.dataset.price),
    img: host.dataset.img,
  };
}

export function initCart() {
  const root = document.getElementById('cart');
  const openBtn = document.querySelector('[data-cart-open]');
  if (!root || !openBtn) return null;

  ui = {
    root,
    openBtn,
    badge: openBtn.querySelector('[data-cart-badge]'),
    backdrop: root.querySelector('.cart__backdrop'),
    panel: root.querySelector('.cart__panel'),
    closeBtn: root.querySelector('[data-cart-close]'),
    list: root.querySelector('[data-cart-list]'),
    total: root.querySelector('[data-cart-total]'),
    summary: root.querySelector('[data-cart-summary]'),
    checkout: root.querySelector('[data-cart-checkout]'),
  };

  gsap.set(root, { pointerEvents: 'none' });
  gsap.set(ui.backdrop, { opacity: 0 });
  gsap.set(ui.panel, { xPercent: 100 });
  paintBadge(false);
  render(false);

  openBtn.addEventListener('click', () => setOpen(true));
  root.querySelectorAll('[data-cart-close]').forEach((b) =>
    b.addEventListener('click', () => setOpen(false)),
  );
  ui.backdrop.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) setOpen(false);
  });

  // qty and removal, delegated so re-rendering never drops a listener
  ui.list.addEventListener('click', (e) => {
    const row = e.target.closest('[data-row]');
    if (!row) return;
    const line = lines[Number(row.dataset.row)];
    if (!line) return;

    if (e.target.closest('[data-drop]')) {
      lines.splice(lines.indexOf(line), 1);
    } else {
      const step = e.target.closest('[data-step]');
      if (!step) return;
      line.qty += Number(step.dataset.step);
      if (line.qty < 1) lines.splice(lines.indexOf(line), 1);
    }
    render(false);
    paintBadge(true);
  });

  ui.checkout.addEventListener('click', () => {
    if (!lines.length) return;
    gsap
      .timeline()
      .to(ui.checkout, { scale: 0.96, duration: 0.12 })
      .to(ui.checkout, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
    ui.summary.textContent = 'CHECKOUT AINDA NÃO CONECTADO';
  });

  // every add button on the page carries its product on a [data-product] host
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add]');
    if (!btn) return;
    e.preventDefault();
    const item = readItem(btn);
    if (!item?.name) return;
    addToCart(item, flySource(btn.closest('[data-product]')));
  });

  return { addToCart, open: () => setOpen(true), close: () => setOpen(false), lines };
}
