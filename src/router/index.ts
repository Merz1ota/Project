import { createWebHistory, createRouter } from 'vue-router'

import MainPage from '@/pages/MainPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  { path: '/:id', component: () => import('@/pages/Post.vue') },
  { path: '/bPage', component: () => import('@/pages/BeautifulPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
