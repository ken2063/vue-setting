// src/router/index.js
import { createRouter, createWebHashHistory} from 'vue-router'
// import { createRouter, createWebHistory} from 'vue-router'
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
        path: '/DefaultHead',
        name: '/DefaultHead',
        component:()=>import('@/layout/DefaultHead.vue')
    },
    {
        path: '/PageLayout',
        name: '/PageLayout',
        component:()=>import('@/layout/PageLayout.vue')
    },
    {
        path: '/DefaultFooter',
        name: '/DefaultFooter',
        component:()=>import('@/layout/DefaultFooter.vue')
    },
    {
        path: '/NormalLayout',
        name: '/NormalLayout',
        component:()=>import('@/views/NormalLayout.vue')
    },
    {
        path: '/MainHome',
        name: '/MainHome',
        component:()=>import('@/views/main/MainHome.vue')
    },

    // not found
    // {
    //     path: "/notFound",
    //     name: "/notFound",
    //     component:()=>import('@/views/layout/notFound.vue')
    // },
    // {
    //     path: "/:pathMatch(.*)*",
    //     redirect: "/notFound"
    // },
    // not found
]
const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes,
})
export default router