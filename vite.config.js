/*
 * @Author: ryyyyy
 * @Date: 2023-02-15 19:29:15
 * @LastEditors: ryyyyy
 * @LastEditTime: 2023-02-16 11:20:44
 * @FilePath: /react-vite-test/vite.config.js
 * @Description: 
 * 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true
  }
})
