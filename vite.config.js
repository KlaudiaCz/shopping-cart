import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Proxy API requests to JSON server running on port 3001
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix when forwarding to JSON server
        changeOrigin: true, // Change the origin of the host header to the target URL
      }
    }
  }
})
