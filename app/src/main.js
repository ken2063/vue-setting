// main.js파일
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from '@/App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router) // 추가
app.mount('#app') 