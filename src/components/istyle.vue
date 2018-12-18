<style lang="stylus" scoped>
.container
  display flex
  flex-flow row wrap
  justify-content space-between
  .style-example
    height 400px
    width 40%
    margin 20px
    padding 20px
    background-color #e5e5e5
    border-radius 10px
</style>

<template lang="pug">
.container
  Panel.style-example
  .style-example
</template>

<script>
import Panel from './styleComp/Panel.vue'
export default {
  name: 'istyle',
  components: { Panel },
  data () {
    return {

    }
  }
}
</script>
