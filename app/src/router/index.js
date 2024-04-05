// src/router/index.js
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