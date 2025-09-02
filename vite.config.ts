import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.png', '**/*.jpg'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './assets')
    },
  },
  build: {
    outDir: 'public',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
