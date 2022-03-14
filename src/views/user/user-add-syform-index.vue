<template lang='pug'>
  .user-add-main
    h1 新建用户
    sy-form(:inputs='formInputs' url='/syform/user')
</template>

<script>
export default {
  created() {
    this.formInputs = [
      {
        type: 'input',
        label: '姓名',
        name: 'name',
        width: 300,
        maxlength: 30,
        rule: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" },
        ]
      },
      {
        type: 'options',
        label: '性别',
        name: 'gender',
        value: '0',
        kind: 2,
        options: [{
          label: '男',
          value: '1'
        }, {
          label: '女',
          value: '0'
        }]
      }
    ]
  }
}
</script>