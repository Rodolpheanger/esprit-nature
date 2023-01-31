// vite.config.js
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// const _dirname =
//   typeof __dirname !== "undefined"
//     ? __dirname
//     : dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
