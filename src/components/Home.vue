<template>
	<div class="home">
		<h1 v-on:click="onInit">{{ msg }}</h1>
	</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home :)'
    }
  },
  methods: {
    onInit: function () {
      console.log('On init')
      var x = this.$localStorage.get('token')
      console.log(x)
    }
  }
}
</script>
