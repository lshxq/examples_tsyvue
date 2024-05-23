export default [
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
    value: '1',
    meta: {
      type: 2,
      multiple: false,
      options: [{
        label: '男',
        value: '1'
      }, {
        label: '女',
        value: '0'
      }]
    }
  },
  {
    type: 'input',
    label: '电话',
    value: '189',
    name: 'phone',
    width: 300,
    maxlength: 30,
    rule: [
      { validator(rule, value, callback) {
        if (!value) {
          callback(new Error('电话必填'))
        } else if (!value.match(/^\d+$/)) {
          callback(new Error('电话必须纯数字'))
        } else {
          callback()
        }
        
      }, trigger: "blur" },
    ]
  },
  {
    type:'datepicker',
    label: '生日',
    name: 'birthday'
  }
]