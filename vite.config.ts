import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/earth/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Styles: path.resolve(__dirname, 'src/assets/styles'),
      Images: path.resolve(__dirname, 'src/assets/images'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts'),
      Components: path.resolve(__dirname, 'src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${normalizePath(
          path.resolve(__dirname, 'src/assets/styles/import.scss')
        )}';`,
      },
    },
  },
})
