<style lang="stylus" scoped>
.container
  margin 10px 0px
  padding 10px
  border-radius 4px
  background-color #e5e9f2
</style>

<template lang="pug">
.container {{message}}
</template>

<script>
export default {
  name: 'comp2',
  data () {
    return {
      message: '等待组件1发射事件'
    }
  },
  created () {
    this.$bus.$on('onComp1Click', data => {
      this.$message(`组件src/components/vueExample/communicate/comp2.vue收到了消息${data}`)
      this.message = data
    })
  },
  beforeDestroy () {
    this.$bus.$off('onComp1Click')
  }
}
</script>
