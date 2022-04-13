import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClienteView from '../views/ClienteView.vue'
import PasteleroView from '../views/PasteleroView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: ClienteView

  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: PasteleroView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
