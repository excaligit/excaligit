import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    sourcemap: false,
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `assets/excaligit.js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/excaligit.[ext]`,
      },
    },
  },
  server: {
    host: true,
    port: 3000,
  },
})
