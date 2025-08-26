import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Data from '../views/Data.vue'

const routes = [
  { path: '/', component: Landing },       // 官網首頁
  { path: '/login', component: Login },    // 登入頁
  { path: '/home', component: Dashboard }, // 使用者主頁
  { path: '/data', component: Data }       // 管理員頁
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
