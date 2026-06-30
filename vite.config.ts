import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: { port: 5180 },
  test: { environment: 'jsdom' },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          sentry: ['@sentry/react'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
