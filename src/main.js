// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueLocalStorage)

// url root
Vue.http.options.root = 'http://127.0.0.1:3030'

// set tokens in headers
Vue.http.interceptors.push(function (request, next) {
  request.headers.set('x-access-tone', this.$localStorage.get('token'))
  next()
})

// protected routes
router.beforeEach((to, from, next) => {
  // paths that don't need auth
  if (to.path === '/login' || to.path === '/register' || to.path === '/') {
    if (localStorage.token != null) {
      next('/home')
    }
  } else {
    if (localStorage.token == null) {
      console.log('ir a login')
      next('/login')
    }
  }
  next()
})

export const eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  localStorage: {
    token: String,
    registration_step: 0,
    user: {
      _id: String,
      name: String,
      lastname: String,
      email: String
    }
  },
  components: { App }
})

