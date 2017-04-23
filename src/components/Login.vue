<template>
	<div id="login">
		<v-container fluid>
			<v-row class="card">
				<v-col xs6 offset-xs3>
					
					<v-card>
						<v-card-row>
							<v-card-title>
								<span class="black--text">
									Who are you?
								</span>
							</v-card-title>
						</v-card-row>

						<v-card-text>
							<v-card-row>
								<v-text-field v-model="credential.email" type="email" label="Email" focus/>
							</v-card-row>
							<v-card-row>
								<v-text-field v-model="credential.password" type="password" label="Password"/>
							</v-card-row>
							<v-card-row>
								<v-btn v-on:click.native="loginWithCredentials" class="cyan darken-1" dark block>Login</v-btn>
							</v-card-row>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      credential: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginWithCredentials: function () {
      this.$http.post('login', this.credential).then(response => {
        // Success callback
        if (response.status === 200) {
          var data = response.body.data
          this.$localStorage.set('token', data.access_token)
          console.log('token from server =>' + this.$localStorage.get('token'))
        }
      }, response => {
        // error callback
        console.log('Request error ' + response.status + ' ' + response.body)
      })
    }
  }
}
</script>

<style scoped>
.card {
	padding-top: 30px;
    height: 900px;
}
</style>
