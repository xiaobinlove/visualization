import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.less', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
