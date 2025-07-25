import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/React1.0/',  // <-- Aquí el nombre EXACTO del repo con las barras
  plugins: [react()],
})
