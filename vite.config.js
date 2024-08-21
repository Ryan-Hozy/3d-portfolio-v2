import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb']
  //this line allows vite to recognize glb as asset. Initially, vite doesnt recognize it.
})
