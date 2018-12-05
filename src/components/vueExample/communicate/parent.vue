<style lang="stylus" scoped>
.parent-component
  .el-input
    margin-bottom 10px
</style>

<template lang="pug">
.parent-component
  el-input(v-model="fatherInput" placeholder="请输入向子组件发送的消息")
    template(slot="prepend") 向子组件发送消息
    el-button(slot="append" icon="el-icon-d-arrow-right" @click="send")
  son1(@speak="onSonSpeak" :father-msg="fatherMsg")
</template>

<script>
import son1 from './son1.vue'
export default {
  name: 'parentToSon',
  components: { son1 },
  data () {
    return {
      fatherInput: 'hello',
      fatherMsg: ''
    }
  },
  methods: {
    send: function () {
      this.fatherMsg = this.fatherInput
    },
    onSonSpeak: function (sonMsg) {
      this.fatherInput = sonMsg
    }
  }
}
</script>
