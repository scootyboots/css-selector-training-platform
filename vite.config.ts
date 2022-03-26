import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  define: { global: "globalThis", },
  base: '/css-selector-training-platform/',
  plugins: [vue()],
  build: {
    target: ['es2015']
  }
})
