<template lang='pug'>
.user-add-main
  h1 新建用户 （Based on syform）
  sy-form(:inputs='formInputs' url='/syform/user' @submitted='submitted' @canceled='canceled')
</template>

<script>
import userFormInput from './form-inputs.js'
export default {
  created() {
    this.formInputs = userFormInput
  },
  methods: {
    submitted(rv) {
      console.log(rv)
      this.$router.push({
        name: 'user-list'
      })
    },
    canceled() {
      this.$router.push({
        name: 'user-list'
      })
    }
  }
}
</script>