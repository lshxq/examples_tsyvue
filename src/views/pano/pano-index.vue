<template lang='pug'>
.pano-main 全景图
  #viewer
</template>

<script>
import {
  Viewer
} from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

export default {
  mounted() {
    new Viewer({
      container: document.querySelector('#viewer'),
      panorama: '/pano.jpg',
    });
  }
}
</script>

<style lang="sass" scoped>
#viewer
  height: 800px
</style>