// vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        baybridge: resolve(__dirname, 'baybridge.html'), // 👈 add this
      },
    },
  },
})
