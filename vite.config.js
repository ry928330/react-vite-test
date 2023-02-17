/*
 * @Author: ryyyyy
 * @Date: 2023-02-15 19:29:15
 * @LastEditors: ryyyyy
 * @LastEditTime: 2023-02-17 18:47:31
 * @FilePath: /react-vite-test/vite.config.js
 * @Description: 
 * 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist/',
  plugins: [react()],
  build: {
    sourcemap: true
  }
})
