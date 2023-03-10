import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  resolve: {
    alias: [
      { find: "components", replacement: "/src/components" },
      { find: "container", replacement: "/src/container" },
      { find: "data", replacement: "/src/data" },
      { find: "lang", replacement: "/src/lang" },
      { find: "store", replacement: "/src/store" },
      { find: "utils", replacement: "/src/utils" },
      { find: "api", replacement: "/src/api" },
      { find: "src", replacement: "/src" },
    ],
  },
});
