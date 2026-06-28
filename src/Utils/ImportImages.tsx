// This is a helper to handle importing multiple images from a folder
function importImages(r: __WebpackModuleApi.RequireContext) {
  let images: Record<string, string> = {};
  r.keys()
    // Reverse the order of the images so that the most recent ones are first
    .reverse()
    .map((item, _) => (images[item.replace("./", "")] = r(item)));
  return images;
}

export const carouselImages = importImages(
  require.context("../Gallery/Carousel", false, /\.(png|jpe?g|svg)$/),
);

export const galleryImages = importImages(
  require.context("../Gallery/Gallery", false, /\.(png|jpe?g|svg)$/),
);
