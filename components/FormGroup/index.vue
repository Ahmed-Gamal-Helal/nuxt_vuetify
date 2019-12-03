<template>
  <div>
    <slot
      :attrs="{
        errorMessages: activeErrorMessages,
        label: name
      }"
      :hasErrors="hasErrors"
    />
  </div>
</template>
<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor'
export default {
  extends: singleErrorExtractorMixin,

  computed: {
    // getServerErrors() {
    //   if (this.$store.getters.getServerErrors) {
    //     return this.$store.getters.getServerErrors[this.name]
    //   } else {
    //     return null
    //   }
    // }
  }
}
</script>
