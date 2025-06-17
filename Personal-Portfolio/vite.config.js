import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: "/Personal-Portfolio/",
  plugins: [react()],
  assetsInclude: ["**/*.docx"],
  build: {
    outDir: "dist",
  },
});
