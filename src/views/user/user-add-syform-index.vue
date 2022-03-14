<template lang='pug'>
  .user-add-main
    h1 新建用户
    sy-form(:inputs='formInputs' url='/syform/user')
</template>

<script>
import userFormInput from './form-inputs.js'
export default {
  created() {
    this.formInputs = userFormInput
  }
}
</script>