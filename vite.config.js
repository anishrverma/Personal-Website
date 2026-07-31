import { defineConfig, normalizePath, transformWithOxc } from "vite";
import react from "@vitejs/plugin-react";

function jsxInJs() {
  return {
    name: "jsx-in-js",
    enforce: "pre",
    async transform(code, id) {
      const normalizedId = normalizePath(id).split("?")[0];

      if (!normalizedId.includes("/src/") || !normalizedId.endsWith(".js")) {
        return null;
      }

      return transformWithOxc(code, id, {
        lang: "jsx",
        jsx: {
          runtime: "automatic",
        },
      });
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [jsxInJs(), react()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "build",
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
