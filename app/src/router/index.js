// src/router/index.js
import { createRouter, createWebHistory} from 'vue-router'
const routes = [
    // not found
    {
        path: "/notFound",
        name: "/notFound",
        component:()=>import('@/views/layout/notFound.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/notFound"
    },
    // not found
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
    {
        path: '/DArending',
        name: '/DArending',
        component:()=>import('@/views/DArending.vue')
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
export default router