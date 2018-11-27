<style lang="stylus" scoped>
.container
  .el-row
    .el-col
      .el-card
        margin-bottom 15px
.card-title
  font-size: 20px
  font-weight: bolder
</style>

<template lang="pug">
.container
  el-row(type="flex", justify="space-around")
    el-col(:span="10")
      el-card(shadow="hover")
        .card-title(slot="header") 事件绑定
        eventExample
      el-card(shadow="hover")
        .card-title(slot="header") ajax请求
        sendAjax
    el-col(:span="10")
      el-card(shadow="hover")
        .card-title(slot="header") 父子组件传值
        parent
      el-card(shadow="hover")
        .card-title(slot="header") 使用$bus传值
        bus
</template>

<script>
import eventExample from './vueExample/event.vue'
import sendAjax from './vueExample/sendAjax.vue'
import bus from './vueExample/busExample.vue'
import parent from './vueExample/communicate/parent.vue'
export default {
  name: 'aboutVue',
  components: { eventExample, parent, sendAjax, bus },
  data () {
    return {
    }
  }
}
</script>
