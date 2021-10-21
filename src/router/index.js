import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 如果用户访问的login直接放行
  if (to.path === '/login') return next()
  // 从sessionStorage中获取token值
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('./login')
  // next代表方向（有参数，强制跳转）
  next()
})

export default router
