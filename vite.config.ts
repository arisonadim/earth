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
      UI: path.resolve(__dirname, 'src/7-shared'),
      Entities: path.resolve(__dirname, 'src/6-entities'),
      Features: path.resolve(__dirname, 'src/5-features'),
      Widgets: path.resolve(__dirname, 'src/4-widgets'),
      Pages: path.resolve(__dirname, 'src/3-pages'),
      App: path.resolve(__dirname, 'src/1-app'),
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
