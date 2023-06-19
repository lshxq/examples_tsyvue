<template lang='pug'>
sy-split-screen-vertical
  template(v-slot:left)
    template(v-for="(rr, idx) of routes")
      .navi-link(
        v-if='rr.meta && rr.meta.navi'
        :key='idx' 
        @click='goto(rr)') {{rr.meta.navi}}
  template(v-slot:right) 
    .right-panel
      router-view
</template>

<script>
import routes from './router/routes.js'

console.log(routes)

export default {
  computed: {
    routes() {
      return routes
    }
  },
  methods: {
    goto(route) {
      this.$router.push({
        name: route.name
      })
    }
  }
}
</script>

<style lang='sass'>
body,html,#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  height: 100vh
  margin: 0
</style>

<style lang="sass" scoped>
.navi-link:hover
  background-color: lightgray
.navi-link
  padding: 5px 10px
  cursor: pointer
.right-panel
  padding: 20px
</style>
