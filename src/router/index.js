import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: () => import('../pages/userCenter.vue')
  },
  {
    path: '/course/:id',
    name: 'course',
    component: () => import('../pages/course.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
