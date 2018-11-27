<style lang="stylus" scoped>
#map
  height 550px
</style>

<template lang="pug">
#map
</template>

<script>
export default {
  name: 'imap',
  data () {
    return {

    }
  },
  mounted () {
    this.map = L.map('map', {
      center: [34.089075, 105.134764],
      zoom: 4
    })
    L.esri.tiledMapLayer({
      url: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer'
    }).addTo(this.map)
    let popup = L.popup()
    this.map.on('click', e => {
      popup
        .setLatLng(e.latlng)
        .setContent('你点击了 ' + e.latlng.toString())
        .openOn(this.map)
    })
  }
}
</script>
