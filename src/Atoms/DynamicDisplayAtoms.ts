import { atom } from 'recoil';

// Create a Recoil atom to store the viewport width in pixels
export const viewportWidthState = atom({
  key: 'viewportWidthState',
  default: window.innerWidth, // Initialize with the current viewport width
});
