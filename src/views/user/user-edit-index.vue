<template lang="pug">
  .user-add-main
    h1 编辑用户
    user-form.mt100(url='/user' :id='userId' :mock='mock')

</template>

<script>
import UserForm from './components/user-form.vue'

export default {
  components: {
    UserForm,
  },
  created() {
    this.mock = () => { // 没有后端接口，提供一个假数据供编辑
      return {
        name: '大天二',
        gender: 1,
        phone: '1414141414',
        email: 'datianer@hongxing.com',
        birth: '1980-6-4'
      }
    }
  },
  computed: {
    userId() {
      return this.$route.params.id
    },
  }
}
</script>