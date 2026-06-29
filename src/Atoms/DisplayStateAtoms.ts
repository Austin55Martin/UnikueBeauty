import { atom } from 'recoil';

// Create a Recoil atom to store the viewport width in pixels
export const showServicesMenu = atom({
  key: 'showServicesMenu',
  default: false, // Initialize with the current viewport width
});

export const showBookNowFab = atom({
  key: 'showBookNowFab',
  default: false, 
});