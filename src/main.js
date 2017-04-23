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
Vue.http.options.root = 'http://45.55.205.123:3124'

Vue.http.interceptors.push(function (request, next) {
  // modify headers
  request.headers.set('x-access-tone', this.$localStorage.get('token'))
  // request.headers.set('Authorization', 'Bearer TOKEN');
  // continue to next interceptor
  next()
})

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

