<template>
  <div id="app">
    <v-toolbar class="cyan darken-1">
      <v-toolbar-title class="center">CodersBoard</v-toolbar-title>
      <v-toolbar-items class="hidden-md-and-down">
        <v-toolbar-item href="/" router>
          Home
        </v-toolbar-item>

        <v-toolbar-item v-for="tab in tabs" 
        :key="tab.name" 
        :href="tab.route"
        router
        v-if="tab.needsAuth === isAuth">
          {{tab.name}}
        </v-toolbar-item>


        <v-toolbar-item v-on:click.native="logout" 
        v-if="isAuth" ripple>
          LOGOUT
        </v-toolbar-item>

      </v-toolbar-items>
    </v-toolbar>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isAuth: '',
      tabs: [
        {
          name: 'Login',
          route: '/login',
          needsAuth: false
        },
        {
          name: 'Register',
          route: '/register',
          needsAuth: false
        },
        {
          name: 'Logout',
          route: '/logout',
          needsAuth: true
        }
      ]
    }
  },
  watch: {
    isAuth: function () {
      var localStorage = this.$localStorage
      if (localStorage !== null && localStorage.get('token') != null) {
        return true
      }
      return false
    }
  },
  created: function () {
    this.isAuth = this.$localStorage.get('token') !== null
  },
  methods: {
    logout: function () {
      this.$localStorage.remove('token')
    }
  }
}
</script>

