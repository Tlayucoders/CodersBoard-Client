<template>
  <v-toolbar class="cyan darken-1" id="headerMenu">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-toolbar-items class="hidden-md-and-down">

        <v-toolbar-item v-for="tab in tabs" 
        slot="activator"
        :key="tab.name" 
        :href="tab.route"
        v-if="tab.needsAuth === isAuth"
        router>
          {{tab.name}}
        </v-toolbar-item>


        <v-toolbar-item v-on:click.native="logout" 
        v-if="isAuth"
        ripple>
          Logout
        </v-toolbar-item>

      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  props: ['isAuth'],
  name: 'headerMenu',
  data () {
    return {
      title: 'CodersBoard',
      tabs: [
        {
          name: 'Home',
          route: '/',
          needsAuth: false
        },
        {
          name: 'Home',
          route: '/home',
          needsAuth: true
        },
        {
          name: 'Login',
          route: '/login',
          needsAuth: false
        },
        {
          name: 'Register',
          route: '/register',
          needsAuth: false
        }
      ]
    }
  },
  methods: {
    logout: function () {
      this.$emit('finishSession')
    }
  }
}
</script>
