// vite 초기셋팅
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import { fileURLToPath, URL } from "url";

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
//   },
// });
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

import path from 'path' // 추가
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src'), // 추가
    }
  }
})
