import gsap from 'gsap';

// @ts-ignore
export function swapAnimations(selector, fromVars, toVars, duration) {
  const elements = document.querySelectorAll(selector);
  const timeline = gsap.timeline({ defaults: { duration: duration || 1, ease: 'power1.inOut' } });

  elements.forEach((el, i) => {
    timeline.fromTo(
      el,
      { ...fromVars },
      {
        ...toVars,
        yoyo: true,
        stagger: 0.2
      },
      i * 0.2
    );
  });
}
