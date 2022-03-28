<template lang='pug'>
  .user-add-main
    h1 编辑用户 （Based on syform）
    sy-form(:inputs='formInputs' :id='id' url='/syform/user' @canceled='canceled')
</template>

<script>
import userFormInput from './form-inputs.js'
export default {
  created() {
    this.formInputs = userFormInput
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  methods: {
    canceled() {
      this.$router.push({
        name: 'user-list'
      })
    }
  }
}
</script>