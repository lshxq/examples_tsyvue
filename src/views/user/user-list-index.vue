<template lang="pug">
.user-list-main 
  h1 用户列表
  sy-pagin-table(url='/user/list' :columns='columns' :mock='mock')
    template(v-slot:operate='scope') 
      a(href='javascript:false' @click='edit(scope.data)') 编辑用户 ({{scope.data.index % 2 === 0 ? ' form-mixin ' : ' syform '}})
</template>

<script>
export default {
  created() {
    this.columns = [{
      label: '姓名',
      prop: 'name',
    }, {
      label: '性别',
      getContent(data) {
        return data.row.gender == '1' ? '男' : '女'
      },
      width: 50  // 指定lie宽度
    }, {
      label: '邮件',
      prop: 'email',
    }, {
      label: 'phone',
      prop: 'phone'
    },{
      label: '操作',
      slot: 'operate'
    }]

    // 因为没有后端接口，提供一个假数据给列表显示
    this.mock = () => {
      const userData = []
      for (let idx=0; idx<10; idx++) {
        userData.push({
          id: idx,
          name: `姓名 ${idx}`,
          gender: Math.random() > .5 ? 1 : 0,
          email: `邮件 ${idx}`,
          phone: `电话 ${idx}`
        })
      }
      return  {
        data: userData,
        total: 25
      }
    }
  },
  methods: {
    edit(data) {
      const {
        row:rec,
        index
      } = data
      
      this.$router.push({
        name: index % 2 === 0 ? 'edit-user' : 'edit-user-syform',
        params: {
          id: rec.id
        }
      })
    }
  }
}
</script>