import Vue from 'vue'
import Vuelidate from 'vuelidate'
import vuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor'
import FormGroup from '@/components/FormGroup'

Vue.use(vuelidateErrorExtractor, {
  template: templates.singleErrorExtractor, // you can also pass your own custom template
  messages: {
    required: 'The {attribute} field is required',
    email: 'The {attribute} must be an email '
  } // error messages to use
})

Vue.use(Vuelidate)
Vue.component('form-group', FormGroup)
Vue.component('formWrapper', templates.FormWrapper)
