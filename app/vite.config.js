// vite 초기셋팅
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
// vite 초기셋팅

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [vue()],
  // base: "/vue-setting/",
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: {
    port: '8080',
  },
  build: {
    outDir: './vue/'
  }
});