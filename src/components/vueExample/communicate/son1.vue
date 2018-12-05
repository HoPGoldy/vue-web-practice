<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
  el-input(v-model="sonInput")
    template(slot="prepend") 向父组件发送消息
    el-button(slot="append" icon="el-icon-d-arrow-right" @click="$emit('speak', sonInput)")
</template>

<script>
export default {
  name: 'son1',
  props: [ 'fatherMsg' ],
  data () {
    return {
      sonInput: ''
    }
  },
  watch: {
    fatherMsg: function (newMsg) {
      this.sonInput = newMsg + ' world'
    }
  }
}
</script>
