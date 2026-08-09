// vite/client already declares lowercase *.png/*.jpg/*.jpeg/*.svg; a few
// assets in this repo use uppercase extensions, which need their own entries.
declare module "*.PNG";
declare module "*.JPG";
declare module "*.JPEG";
