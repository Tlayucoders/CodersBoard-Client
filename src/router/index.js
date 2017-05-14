import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: true
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode: 'history'
})
