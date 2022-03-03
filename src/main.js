import Vue from 'vue'
import App from './App.vue'
import tsy from 'tsyvue'
import element from 'element-ui'
import axios from 'axios'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/main.sass'

Vue.config.productionTip = false

Vue.use(tsy)
Vue.use(element)

Vue.mixin({
  created() {
    this.$axios = (reqOpt) => { // 全局绑定 $axios, 为sy-pagin-xxxx 和 form-mixin使用 !important
      return new Promise((res, rej) => {
        axios(reqOpt).then(res).catch(ex => {
          if (reqOpt.mock) {
            console.log('请求失败，使用Mock数据', reqOpt)
            res({
              data: reqOpt.mock()
            })
          } else {
            rej(ex)
          }
        })
      })
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
