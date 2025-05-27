// This is a helper to handle importing multiple images from a folder
function importAll(r: __WebpackModuleApi.RequireContext) {
  let images: Record<string, string> = {};
  r.keys().map((item, _) => (images[item.replace("./", "")] = r(item)));
  return images;
}

const images = importAll(
  require.context("../Gallery/Insta", false, /\.(png|jpe?g|svg)$/)
);
export default images;
