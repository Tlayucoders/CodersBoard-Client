<template>
	<div id="register">
		<v-container fluid>
      <v-row  class="card">
        <v-col xs6 offset-xs3>
          
          <v-card>
            <v-card-row>
              <v-card-title>
                <span class="black--text">Let's start!</span>
              </v-card-title>
            </v-card-row>

            <v-card-text>
              <v-card-row>
                <v-text-field v-model="account.name" label="Name" focus/>
              </v-card-row>
              <v-card-row>
                <v-text-field v-model="account.lastname" label="Lastname" />
              </v-card-row>
              <v-card-row>
                <v-text-field v-model="account.email" type="email" label="Email" />
              </v-card-row>
              <v-card-row>
                <v-text-field v-model="account.password" type="password" label="Password" />
              </v-card-row>
              <v-card-row>
                <v-text-field v-model="confirmPassword" type="password" label="Confirm Password" />
              </v-card-row>
              <v-card-row>
                <v-btn v-on:click.native="registerAccount" class="cyan darken-1" dark block>
                  Register
                </v-btn>
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
  name: 'register',
  data () {
    return {
      account: {
        name: '',
        lastname: '',
        email: '',
        password: ''
      },
      confirmPassword: ''
    }
  },
  methods: {
    registerAccount: function () {
      this.$http.post('register', this.account).then(response => {
        // Success callback
        console.log('Request done ' + response.body)
      }, response => {
        // error callback
        console.log('Request error ' + response.status + ' ' + response.body)
      })
    }
  }
}
</script>

<style scoped>
  .card{
    padding-top: 30px;
    height: 900px;
  }
</style>
