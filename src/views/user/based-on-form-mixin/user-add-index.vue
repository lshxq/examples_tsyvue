<template lang="pug">
.user-add-main
  h1 新建用户 (Based on form-mixin)
  user-form(url='/user')

</template>

<script>
import UserForm from './components/user-form.vue'

export default {
  components: {
    UserForm,
  },
}
</script>