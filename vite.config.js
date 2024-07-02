import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['fast-simplex-noise']
  },
  base: process.env.NODE_ENV === 'production' ? '/ratangulati/' : '/',
  build: {
    outDir: 'dist',
  }
})