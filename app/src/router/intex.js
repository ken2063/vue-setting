import { createWebHistory , createRouter  } from 'vue-router'

// 라우터 설계
const routes = [
    { 
      path : '/',
      name: '/',
      component: () => import('@/views/HelloWorld.vue'),
    }
]

export default createRouter({
  history: createWebHistory(),
  routes,
});