import { gsap } from 'gsap';

// Subtle fade/translate reveal. Skipped entirely under prefers-reduced-motion.
export function initReveal(): void {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  gsap.set(els, { opacity: 0, y: 18 });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: Number(el.dataset.revealDelay ?? 0), clearProps: 'transform' });
        io.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
  );
  els.forEach((el) => io.observe(el));
}
