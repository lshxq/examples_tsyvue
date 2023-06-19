import { createApp } from 'vue'
import App from './App.vue'
import tsy from 'tsyvue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import router from './router'
import './assets/main.sass'


const app = createApp(App)
app.use(tsy)
app.use(ElementPlus)
app.use(router)


app.mixin({
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


app.mount('#app')