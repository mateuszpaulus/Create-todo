import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [,
  {
    path: '/',
    name: 'todos',
    component: () => import('@/views/todos.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
