import { createWebHistory , createRouter  } from 'vue-router'

// 라우터 설계
const routes = [
    { 
      path : '/',
      name: '/',
      component: () => import('@/views/indexGuide.vue'),
    },{ 
      path : '/indexGuide',
      name: '/indexGuide',
      component: () => import('@/views/indexGuide.vue'),
    },
    { 
      path : '/HelloWorld',
      name: '/HelloWorld',
      component: () => import('@/views/layoyt/HelloWorld.vue'),
    }
]

export default createRouter({
  history: createWebHistory(),
  routes,
});