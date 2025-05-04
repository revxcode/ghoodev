// @ts-nocheck
import gsap from "gsap";
import { isMobile } from "../hooks/useMediaQuery";

let currentIsMobile;
const unsubscribe = isMobile.subscribe(value => {
  currentIsMobile = value;
});

export function avatarAnimation() {
  gsap.fromTo(
    '.avatar-container',
    { scale: 0.5 },
    {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to('.bg-circle', {
          scale: 1.5,
          duration: 0.5,
          delay: 1.5,
          onStart: () => {
            const masking = document.querySelector('.masking');
            if (masking) {
              gsap.to(masking, {
                clipPath: 'polygon(50% -1%, 85% 5%, 100% 25%, 100% 63%, 0% 83%, 0% 25%, 15% 5%)'
              });
            }

            const bannerBottom = document.querySelector('.banner-bottom');
            if (bannerBottom) {
              gsap.fromTo(
                bannerBottom,
                { rotate: 0, x: 0, y: 100, opacity: 0 },
                {
                  duration: 0.5,
                  rotate: -12,
                  x: 25,
                  y: currentIsMobile ? 80 : 50,
                  opacity: 1,
                  borderTop: '2px solid oklch(0.715 0.143 215.221)',
                  onComplete: () => {
                    const bannerText = document.querySelector('.banner-text');
                    if (bannerText) {
                      gsap.fromTo(
                        bannerText,
                        {
                          x: -40
                        },
                        {
                          x: 0,
                          opacity: 1,
                          duration: 1,
                          ease: 'power2.out'
                        }
                      );
                    }
                  }
                }
              );
            }
          }
        });
      }
    }
  );
}

unsubscribe();
