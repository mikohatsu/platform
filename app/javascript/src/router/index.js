import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import SearchPage from '../components/SearchPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 