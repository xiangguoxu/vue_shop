import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Users from '../views/user/Users.vue'
import Rights from '../views/power/Rights.vue'
import Roles from '../views/power/Roles.vue'
import Add from '../views/goods/Add.vue'
import Cate from '../views/goods/Cate.vue'
import List from '../views/goods/List.vue'
import Params from '../views/goods/Params.vue'
import Report from '../views/report/Report.vue'

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
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome ',
        component: Welcome
      },
      {
        path: '/users',
        name: 'Users ',
        component: Users
      },
      {
        path: '/rights',
        name: 'Rights',
        component: Rights
      },
      {
        path: '/roles',
        name: 'Roles',
        component: Roles
      },
      {
        path: '/categories',
        name: 'Cate',
        component: Cate
      },
      {
        path: '/params',
        name: 'Params',
        component: Params
      },
      {
        path: '/goods',
        component: List
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/reports',
        component: Report
      }
    ]
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
