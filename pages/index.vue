<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
        <nuxt-link to="/login">login</nuxt-link>
      </div>
      <!-- <form-wrapper :validator="$v.form">
        <form>
          <v-row>
            <v-col v-for="item in itemsLoop" :key="item.index" cols="12" md="6">
              <form-group :name="item">
                <template slot-scope="{ attrs }">
                  <v-text-field
                    v-model="form[item]"
                    v-bind="attrs"
                    @blur="$v.form[item].$touch()"
                    :label="item"
                    outlined
                  ></v-text-field>
                </template>
              </form-group>
            </v-col>
          </v-row>
        </form>
      </form-wrapper> -->
    </v-flex>
  </v-layout>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      form: {
        name: '',
        age: 0,
        email: '',
        phone: ''
      }
    }
  },
  computed: {
    itemsLoop() {
      return Object.keys(this.form)
    }
  },
  validations() {
    return {
      form: {
        name: {
          required
        },
        age: {
          required
        },
        email: {
          required
        },
        phone: {
          required
        }
      }
    }
  }
}
</script>
