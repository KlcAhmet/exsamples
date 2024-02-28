import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Default React plugin for Vite
    federation({
      name: 'micro-header', // This modules name
      exposes: { // We can think it like modules exports we can extend whatever we want
        './Header': './src/components/Header.tsx'
      },
      shared: ['react','react-dom'] // Shared dependencies from host
    })
  ],
  build: {
    target: 'esnext' // Needed for async imports(important!!)
  },
})