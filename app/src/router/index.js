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
        path: '/HelloWorld',
        name: '/HelloWorld',
        component:()=>import('@/views/layout/HelloWorld.vue')
    },
    {
        path: '/DArending',
        name: '/DArending',
        component:()=>import('@/views/DArending.vue')
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