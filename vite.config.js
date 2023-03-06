import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    strictPort: false,
  },
  build: {
    incremental: true,
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    cache: true,
    mode: "production",
    chunks: true,
    moduleBundling: true,
    devCode: true,
    debug: true,

    minify: "esbuild",
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
});
