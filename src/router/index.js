import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConfirmationView from '../views/ConfirmationView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/confirm',
    name: 'confirmWindow',
    component: ConfirmationView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
