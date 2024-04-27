import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: [
      '**/node_modules/**',
      '**/__tests__/utils/**',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'], // 定义多种覆盖率报告格式
      exclude: ['node_modules', '__tests__'], // 排除不需要覆盖的文件或目录
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@minesweeper": resolve(__dirname, "./src/redux/slice/minesweeper/index"),
    }
  },

})