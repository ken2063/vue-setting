// main.js파일
import { createApp } from 'vue'
import { createPinia } from 'pinia'// 추가
import router from '@/router'// 추가
import App from '@/App.vue'

const app = createApp(App)

app.use(createPinia())// 추가
app.use(router) // 추가
app.mount('#app') 