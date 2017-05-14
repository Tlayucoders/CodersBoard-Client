<template>
  <v-app id="app">
    <HeaderMenu :isAuth="isAuth" @finishSession="logout"></HeaderMenu>
    <main class="main">
      <v-content >
        <router-view></router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import HeaderMenu from './components/HeaderMenu'
import { eventBus } from './main'

export default {
  name: 'app',
  data () {
    return {
      title: 'CodersBoard',
      isAuth: false
    }
  },
  created: function () {
    this.isAuth = this.$localStorage.get('token') !== null
    eventBus.$on('authSuccess', (token) => {
      this.$localStorage.set('token', token)
      this.isAuth = true
      this.$router.push('/home')
    })
  },
  methods: {
    logout: function () {
      if (this.$localStorage !== null) {
        this.$localStorage.remove('token')
        this.isAuth = false
        this.$router.push('/')
      }
    }
  },
  components: {
    HeaderMenu
  }
}
</script>

