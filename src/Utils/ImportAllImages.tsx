// This is a helper to handle importing multiple images from a folder
function importAll(r: __WebpackModuleApi.RequireContext) {
  let images: Record<string, string> = {};
  r.keys()
    // Reverse the order of the images so that the most recent ones are first
    .reverse()
    .map((item, _) => (images[item.replace("./", "")] = r(item)));
  return images;
}

const images = importAll(
  require.context("../Gallery/Carousel", false, /\.(png|jpe?g|svg)$/),
);
export default images;
