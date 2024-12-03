import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // 入口文件将包含可以由你的包的用户导入的导出：
      entry: path.resolve(__dirname, 'src/components/index.tsx'),
      name: 'ReactComponents',
      fileName: (format) => `react-components.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom', 'antd', '@ant-design/icons'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'react-dom'
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.less', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
