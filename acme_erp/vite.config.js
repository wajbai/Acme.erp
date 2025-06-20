import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // ✅ This line is REQUIRED for GitHub Pages
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true
  }
})
