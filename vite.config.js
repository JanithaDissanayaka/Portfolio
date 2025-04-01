import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Portfolio/", // Change "Portfolio" to your repo name
  plugins: [react()],
});

