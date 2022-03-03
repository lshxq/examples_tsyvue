<template lang='pug'>
  sy-split-screen-vertical
    template(slot='left')
      .navi-link(
        v-for="(route, idx) of routes"
        v-if='route.meta && route.meta.navi'
        :key='idx' 
        @click='goto(route)') {{route.meta.navi}}
    template(slot='right') 
      .right-panel
        router-view
</template>

<script>
import routes from './router/routes.js'
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
body,html
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  height: 100%
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
