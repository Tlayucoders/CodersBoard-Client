<template>
	<div class="home">
		<h2 v-on:click="onInit">
      {{ msg }}
    </h2>
	</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'no auth :)'
    }
  },
  created: function () {
    if (this.$localStorage.get('token') !== null) {
      this.msg = 'you are login :)'
    }
  },
  methods: {
    onInit: function () {
      console.log('On init')
      var x = this.$localStorage.get('token')
      console.log(x)
    },
    beforeCreated: function () {
      console.log('beforeCreated')
    }
  }
}
</script>
