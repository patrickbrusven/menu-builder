import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import RegisterUser from '../views/RegisterUser.vue'
import LoginUser from '../views/LoginUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterUser
  },
  {
    path: '/login',
    name: 'login',
    component: LoginUser
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const loggedIn = localStorage.getItem('user')
//   if (to.name == 'login' && loggedIn) next({name: 'dashboard'})
//   else next()
// })

router.beforeEach((to, from, next) => {
  const loggedIn = sessionStorage.getItem('user')
  if (to.name == 'login' && loggedIn) next({name: 'dashboard'})
  else next()
})

// router.beforeEach((to, from, next) => {
//   const loggedIn = localStorage.getItem('user')
//   if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
//     next('/')
//   } else {
//     next()
//   }
router.beforeEach((to, from, next) => {
  const loggedIn = sessionStorage.getItem('user')
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
