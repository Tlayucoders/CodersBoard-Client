<template>
	<div class="register">
		
		<div class="center">
			<v-card>
				<v-card-row>
					<v-card-title>
						<span class="black--text">
							Let's start!
						</span>
					</v-card-title>
				</v-card-row>
				<v-card-text>
					<v-card-row>
						<v-text-field
						name="input-1"
						label="Full Name" />
					</v-card-row>
					<v-card-row>
						<v-text-field
						name="input-2"
						label="Email" />
					</v-card-row>
					<v-card-row>
						<v-text-field
						name="input-3"
						label="Password" />
					</v-card-row>
					<v-card-row>
						<v-text-field
						name="input-3"
						label="Confirm Password" />
					</v-card-row>
					<v-card-row>
						<v-btn class="cyan darken-1" dark block>
							Register
						</v-btn>
					</v-card-row>
				</v-card-text>
			</v-card>
		</div>
	</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: 'register'
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
