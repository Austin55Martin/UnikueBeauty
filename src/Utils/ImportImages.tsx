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

const carouselModules = import.meta.glob<string>(
  "../Gallery/Carousel/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default" },
);

const galleryModules = import.meta.glob<string>(
  "../Gallery/Gallery/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default" },
);

export const carouselImages = importImages(carouselModules);

export const galleryImages = importImages(galleryModules);
