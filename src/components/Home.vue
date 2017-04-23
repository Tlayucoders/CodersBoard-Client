<template>
	<div class="home">
		<h1 v-on:click="greet">{{ msg }}</h1>
	</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home :)'
    }
  }
}
</script>
