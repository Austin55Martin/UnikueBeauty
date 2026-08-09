// This is a helper to handle importing multiple images from a folder
function importImages(modules: Record<string, string>) {
  const images: Record<string, string> = {};
  Object.keys(modules)
    // Reverse the order of the images so that the most recent ones are first
    .reverse()
    .forEach((path) => {
      const filename = path.substring(path.lastIndexOf("/") + 1);
      images[filename] = modules[path];
    });
  return images;
}

// Resized/re-encoded via vite-imagetools (see vite.config.ts) so the browser
// never has to download full camera-resolution originals just to display
// them in a small grid cell or a carousel slide.
const carouselModules = import.meta.glob<string>(
  "../Gallery/Carousel/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default", query: "?w=1000&format=webp&quality=80" },
);

const galleryThumbModules = import.meta.glob<string>(
  "../Gallery/Gallery/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default", query: "?w=400&format=webp&quality=70" },
);

const galleryFullModules = import.meta.glob<string>(
  "../Gallery/Gallery/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default", query: "?w=1600&format=webp&quality=82" },
);

export const carouselImages = importImages(carouselModules);

export const galleryThumbImages = importImages(galleryThumbModules);

export const galleryFullImages = importImages(galleryFullModules);
