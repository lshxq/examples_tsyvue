<template lang="pug">
  .order-main
    h2.mb30 订单信息
    sy-pagin-data(url='/order/list' :mock='mock')
      template(slot-scope='scope')
        .order-card.mb30(v-for='(order, idx) of scope.data' :key='idx')
          .flex-center
            img(src='../../assets/logo.png')
          .order-name.flex-center {{order.name}}
</template>

<script>

const base = '3日15时，全国政协十三届五次会议新闻发布会举行，大会新闻发言人郭卫民将向中外媒体介绍本次大会有关情况并回答记者提问。为有效防控疫情，新闻发布会将采用网络视频形式进行。'
const ramdomStr = () => {
  let str=''
  for (let idx=0; idx<10; idx++) {
    const ii = Math.floor(Math.random() * base.length)
    str += base.charAt(ii)
  }
  return str
}

export default {
  created() {
    this.mock = () => {
      const orderData = []
      for (let idx=0; idx<10; idx++) {
        orderData.push({
          name: ramdomStr(),
          created: new Date().getTime(),
          userId: 2
        })
      }
      return {
        data: orderData,
        total: 95
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.order-card
  box-shadow: 5px 5px 5px gray
  cursor: pointer
  border: 1px solid #f0f0f0
  margin: 20px
  padding: 20px
  display: inline-block
  width: 300px

</style>