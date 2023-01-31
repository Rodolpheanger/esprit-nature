// vite.config.js
import { resolve, __dirname } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pages: resolve(__dirname, "legals/index.html"),
      },
    },
  },
});
