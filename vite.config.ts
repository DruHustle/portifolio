import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const plugins = [react(), tailwindcss(), jsxLocPlugin()];

export default defineConfig({
  plugins,
  base: "/portfolio/", // CRITICAL: Fix for GitHub Pages asset loading
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // This tells Vite to put the final files in /dist at the project root
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    // Ensures assets are generated with relative paths
      assetsDir: 'assets',
  },


  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },

});
