import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [react(), imagetools()],
  assetsInclude: ["**/*.PNG", "**/*.JPG", "**/*.JPEG"],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
  },
});
