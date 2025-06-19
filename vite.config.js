import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: ".nojekyll",
          dest: ".", // puts .nojekyll in dist/
        },
      ],
    }),
  ],
  assetsInclude: ["**/*.docx"],
  base: "/Personal-Portfolio/", // for GitHub Pages
  build: {
    outDir: "dist",
  },
});
