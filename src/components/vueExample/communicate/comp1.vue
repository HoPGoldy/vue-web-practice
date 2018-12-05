<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
  el-input(v-model="comp1Input")
    template(slot="prepend") 发射事件
    el-button(slot="append" icon="el-icon-d-arrow-right" @click="$bus.$emit('onComp1Click', comp1Input)")
</template>

<script>
export default {
  name: 'comp1',
  data () {
    return {
      comp1Input: ''
    }
  }
}
</script>
