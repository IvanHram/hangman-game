import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name === "index.html") {
            return "index.html";
          }
          return "[name].[ext]";
        },
      },
    },
  },
});
