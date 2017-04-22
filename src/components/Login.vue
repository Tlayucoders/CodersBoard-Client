<template>
	<div class="login">

		<div class="center">
			<v-card>
				<v-card-row>
					<v-card-title>
						<span class="black--text">Who are you?</span>
					</v-card-title>
				</v-card-row>
				<v-card-text>
					<v-card-row>
						<v-text-field
				            name="input-1"
				            label="Email"
				          ></v-text-field>
					</v-card-row>
					<v-card-row>
						<v-text-field
				            name="input-2"
				            label="Password"
				          ></v-text-field>
					</v-card-row>
					<v-card-row>
						<v-btn class="cyan darken-1" dark block>Login</v-btn>
					</v-card-row>
				</v-card-text>
			</v-card>

			
		</div>
		
	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login'
    }
  }
}
</script>

<style scoped>
.center {
	margin: auto;
	margin-top: 40px;
	width: 500px;
	height: 500px;
}
</style>
