/**
 * Svelte action for scroll-triggered fade-in animations
 * Respects user's prefers-reduced-motion preference
 */

interface ScrollFadeOptions {
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

export function scrollFade(node: HTMLElement, options: ScrollFadeOptions = {}) {
  const {
    delay = 0,
    duration = 800,
    threshold = 0.15,
    rootMargin = '0px'
  } = options;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Skip animation if user prefers reduced motion
    return {};
  }

  // Set initial state
  node.style.opacity = '0';
  node.style.transform = 'translateY(20px)';
  node.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
  node.style.transitionDelay = `${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          
          // Unobserve after animation
          observer.unobserve(node);
        }
      });
    },
    {
      threshold,
      rootMargin
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
