<template>
  <v-form @submit="submitForm">
    <v-row>
      <v-col cols="12" md="6">
        <form-group :validator="$v.username" name="username">
          <template slot-scope="{ attrs }">
            <v-text-field
              v-model="username"
              v-bind="attrs"
              @blur="$v.username.$touch()"
              label="username"
              outlined
            ></v-text-field>
          </template>
        </form-group>
      </v-col>
      <v-col cols="12" md="6">
        <form-group :validator="$v.password" name="password">
          <template slot-scope="{ attrs }">
            <v-text-field
              v-model="password"
              v-bind="attrs"
              @blur="$v.password.$touch()"
              label="Password"
              outlined
            ></v-text-field>
          </template>
        </form-group>
      </v-col>
      <v-col cols="12">
        <v-btn type="submit" variant="primary">Login</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submitForm(evt) {
      evt.preventDefault()
      const credentials = {
        username: this.username,
        password: this.password
      }
      try {
        await this.$auth.loginWith('local', {
          data: credentials
        })
        this.$router.push('/')
      } catch (e) {
        this.$router.push('/login')
      }
    }
  },
  validations() {
    return {
      username: {
        required,
        email
      },
      password: {
        required
      }
    }
  }
}
</script>
