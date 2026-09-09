import { gsap, ScrollTrigger } from './gsap.js';

let navEl = null;

/**
 * Pulls the header back into view. The hide-on-scroll rule below only runs on
 * scroll, so the header stays put until the reader scrolls down again.
 */
export function revealNav() {
  if (!navEl) return;
  gsap.to(navEl, { yPercent: 0, duration: 0.45, ease: 'expo.out', overwrite: true });
}

export function initNav() {
  const nav = document.getElementById('nav');
  navEl = nav;
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  const items = menu.querySelectorAll('a');

  // condensed state after the hero
  ScrollTrigger.create({
    start: 90,
    end: 'max',
    onToggle: (self) => nav.classList.toggle('is-stuck', self.isActive),
  });

  // hide on scroll down, show on scroll up
  let last = 0;
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const y = self.scroll();
      if (menu.classList.contains('is-open')) return;
      if (y > last && y > 260) gsap.to(nav, { yPercent: -110, duration: 0.5, overwrite: true });
      else gsap.to(nav, { yPercent: 0, duration: 0.5, overwrite: true });
      last = y;
    },
  });

  const open = gsap
    .timeline({ paused: true, defaults: { ease: 'expo.inOut' } })
    .to(menu, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.85 })
    .from(items, { yPercent: 130, opacity: 0, duration: 0.7, stagger: 0.06, ease: 'expo.out' }, 0.2)
    .from('.mobile-menu__foot span', { opacity: 0, duration: 0.5, stagger: 0.1 }, 0.5);

  let isOpen = false;
  const toggle = () => {
    isOpen = !isOpen;
    menu.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('is-locked', isOpen);
    gsap.to(burger.children[0], { rotate: isOpen ? 45 : 0, y: isOpen ? 3.75 : 0, duration: 0.45 });
    gsap.to(burger.children[1], { rotate: isOpen ? -45 : 0, y: isOpen ? -3.75 : 0, duration: 0.45 });
    isOpen ? open.play() : open.reverse();
  };

  burger.addEventListener('click', toggle);
  items.forEach((a) => a.addEventListener('click', () => isOpen && toggle()));
}
