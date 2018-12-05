<template lang="pug">
  div
    el-button(@click="addNum" style="margin-right:20px;") 点此加一
    span 按钮被点击了{{num}}次
</template>

<script>
export default {
  name: 'eventExample',
  methods: {
    addNum: function (event) {
      console.log('事件触发', event)
      this.num++
    }
  },
  data () {
    return {
      num: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
