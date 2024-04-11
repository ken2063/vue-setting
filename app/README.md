# git
create a new repository
repository name : 프로젝트명
------------------------------------------------------------
# git first upload
git init
git add README.md
git commit -m "😤 뷰 커밋 완료"
git branch -M main
git remote add origin
git push -u origin main
------------------------------------------------------------
# git upload
git add .
git commit -m "😤 뷰 커밋 완료"
git push -u origin main
------------------------------------------------------------
# vite
npm create vite@latest 프로젝트명
vue -> typescript or javascript
------------------------------------------------------------
# vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
})
------------------------------------------------------------
# npm i
npm i
------------------------------------------------------------
# yarn install
npm install -g yarn
------------------------------------------------------------
# eslint & prettier
npm install -D prettier
npm install -D eslint
npm install -D eslint-plugin-vue
npm install -D eslint-config-prettier
npm install -D @vue/eslint-config-typescript
------------------------------------------------------------
# .eslint.js
module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  rules: [
    // override or add rules settings here
  ]
};
------------------------------------------------------------
# pinia
npm install pinia
------------------------------------------------------------
# vue-router
npm install vue-router
------------------------------------------------------------
# src/router/index.js
import { createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        name: '/',
        component:()=>import('@/views/indexGuide.vue')
    },
    {
        path: '/indexGuide',
        name: '/indexGuide',
        component:()=>import('@/views/indexGuide.vue')
    },
    {
        path: '/HelloWorld',
        name: '/HelloWorld',
        component:()=>import('@/views/layout/HelloWorld.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
})
export default router
------------------------------------------------------------
# main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from '@/App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router) // 추가
app.mount('#app') 
------------------------------------------------------------
# Sass
npm i sass
npm i sass-loader@10
------------------------------------------------------------