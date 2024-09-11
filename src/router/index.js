import { createRouter, createWebHistory } from '@ionic/vue-router';
import LoyaltyPage from "../views/LoyaltyPage.vue";

const routes = [
  {
    path: '/',
    redirect: '/loyalty'
  },
  {
    path: '/loyalty',
    component: LoyaltyPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
