import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

/** 路径查找 */
const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    },
  },
  build: {
    // https://cn.vitejs.dev/guide/build.html#browser-compatibility
    target: "es2015",
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: pathResolve("index.html")
      }
    }
  },
  plugins: [vue()],
  server: {
    hmr: true
  }
})
