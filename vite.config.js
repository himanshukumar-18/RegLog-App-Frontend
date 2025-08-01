import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1/users": {
        target: process.env.VITE_API_PROXY,
        changeOrigin: true,
        secure: true
      }
    }
  },
  plugins: [react(), tailwindcss(),],
})
