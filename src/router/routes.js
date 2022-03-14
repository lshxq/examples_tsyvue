export default [
  {
    path: '/user/add',
    name: 'add-user',
    meta: {
      navi: '添加用户'
    },
    component: () => import('../views/user/user-add-index.vue')
  },
  {
    path: '/syform/user/add',
    name: 'syform-add-user',
    meta: {
      navi: '添加用户 syform'
    },
    component: () => import('../views/user/user-add-syform-index.vue')
  },
  {
    path: '/user/:id/edit',
    name: 'edit-user',
    component: () => import('../views/user/user-edit-index.vue')
  },
  {
    path: '/syform/user/:id/edit',
    name: 'edit-user-syform',
    component: () => import('../views/user/user-edit-syform-index.vue')
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