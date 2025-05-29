import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/devsoc-webpage/',   // ← add this line
  plugins: [react()],
  // ...any other config you already have...
})
