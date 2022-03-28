export default [
  {
    path: '/user/add',
    name: 'add-user',
    meta: {
      navi: '添加用户 (Based on form-mixin)'
    },
    component: () => import('../views/user/based-on-form-mixin/user-add-index.vue')
  },
  {
    path: '/syform/user/add',
    name: 'syform-add-user',
    meta: {
      navi: '添加用户 (based on syform)'
    },
    component: () => import('../views/user/based-on-syform/user-add-syform-index.vue')
  },
  {
    path: '/user/:id/edit',
    name: 'edit-user',
    component: () => import('../views/user/based-on-form-mixin/user-edit-index.vue')
  },
  {
    path: '/syform/user/:id/edit',
    name: 'edit-user-syform',
    component: () => import('../views/user/based-on-syform/user-edit-syform-index.vue')
  },
  {
    path: '/user/list',
    name: 'user-list',
    meta: {
      navi: '用户列表'
    },
    component: () => import('../views/user/user-list-index.vue')
  },
  {
    path: '/order/list',
    name: 'order-list',
    meta: {
      navi: '订单一览'
    },
    component: () => import('../views/order/order-list-index.vue')
  }
]