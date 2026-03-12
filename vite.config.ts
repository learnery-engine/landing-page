import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/learnery-engine/',
  plugins: [react(), tailwindcss()],
  server: { port: 5180 },
})
