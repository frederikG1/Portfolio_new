import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Whenever React tries to fetch anything starting with /api...
      '/api': {
        // ...forward it to the Node backend
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      }
    }
  }
})