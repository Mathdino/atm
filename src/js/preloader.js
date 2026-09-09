import { gsap } from './gsap.js';

/**
 * Intro sequence: the ATM tag is sprayed in via a soft-edged mask wipe while a
 * loader counts up, then a curtain lifts to hand off to the hero animation.
 *
 * Resolves once the curtain has cleared, so the hero timeline can start.
 */
export function runPreloader() {
  const root = document.getElementById('preloader');
  const wipe = root.querySelector('.tag-wipe');
  const bar = root.querySelector('.preloader__bar i');
  const count = document.getElementById('plCount');
  const lines = root.querySelectorAll('[data-pl]');
  const curtain = root.querySelector('.preloader__curtain');

  document.body.classList.add('is-locked');

  const counter = { v: 0 };

  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      document.body.classList.remove('is-locked');
      root.style.display = 'none';
      resolve();
    };

    // rAF is throttled in a background tab, so guarantee the page is usable
    const bail = setTimeout(() => {
      tl.progress(1);
      finish();
    }, 8000);

    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(bail);
        finish();
      },
    });

    tl.from(lines, { yPercent: 120, opacity: 0, duration: 0.7, stagger: 0.08 }, 0)
      // spray the tag on: the mask rect travels across the artwork
      .fromTo(
        wipe,
        { attr: { x: -2300 } },
        { attr: { x: 0 }, duration: 1.85, ease: 'power1.inOut' },
        0.25,
      )
      .to(bar, { scaleX: 1, duration: 1.9, ease: 'power1.inOut' }, 0.25)
      .to(
        counter,
        {
          v: 100,
          duration: 1.9,
          ease: 'power1.inOut',
          onUpdate: () => {
            count.textContent = String(Math.round(counter.v)).padStart(3, '0');
          },
        },
        0.25,
      )
      .to([lines, bar.parentNode, count.parentNode], { opacity: 0, duration: 0.4 }, 2.25)
      .to('.preloader__tag', { scale: 0.86, opacity: 0, duration: 0.7, ease: 'power2.inOut' }, 2.3)
      .to(curtain, { scaleY: 1, duration: 0.7, ease: 'expo.inOut' }, 2.4)
      // lift the whole panel away to reveal the hero
      .to(root, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1, ease: 'expo.inOut' }, 2.95);
  });
}
