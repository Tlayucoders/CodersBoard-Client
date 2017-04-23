<template>
  <div id="app">
    <v-toolbar class="cyan darken-1">
      <v-toolbar-title class="center">CodersBoard</v-toolbar-title>
      <v-toolbar-items class="hidden-md-and-down">
        <v-toolbar-item router href="/">
          home
        </v-toolbar-item>
        <v-toolbar-item router href="/login">
          Login
        </v-toolbar-item>
        <v-toolbar-item router href="/register">Registro</v-toolbar-item>
      </v-toolbar-items>
    </v-toolbar>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

