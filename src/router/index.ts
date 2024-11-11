import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/a-propos',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/regles',
      name: 'rules',
      component: () => import('../views/RulesView.vue'),
    },
    {
      path: '/participer',
      name: 'participate',
      component: () => import('../views/ParticipateView.vue'),
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: () => import('../views/SponsorsView.vue'),
    },
    {
      path: '/inscription',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 };
    }
  }
})

export default router
