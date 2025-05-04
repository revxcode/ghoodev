import { readable } from 'svelte/store';

// Helper function to check if device is mobile
const checkIsMobile = () => {
  if (typeof window === 'undefined') return false; // SSR support

  return window.matchMedia('(max-width: 768px)').matches ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Create a readable store
export const isMobile = readable(checkIsMobile(), set => {
  if (typeof window === 'undefined') return; // Skip during SSR

  const update = () => set(checkIsMobile());

  // Update on resize and orientation change
  window.addEventListener('resize', update);
  window.addEventListener('orientationchange', update);

  // Cleanup
  return () => {
    window.removeEventListener('resize', update);
    window.removeEventListener('orientationchange', update);
  };
});