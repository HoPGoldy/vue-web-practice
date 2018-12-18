<style lang="stylus" scoped>
.container
  .el-col
    margin 5px
    padding 5px
    background-color #e5e9f2
    border-radius 5px
    .el-button
      margin 8px 8px
</style>

<template lang="pug">
.container
  el-row(:gutter="10")
    el-col(:span="11")
      el-input(v-model="saveKey" placeholder="键名")
      el-input(v-model="value" placeholder="内容")
      el-button(type="primary" @click="saveData") 保存数据
    el-col(:span="11")
      el-input(v-model="loadKey" placeholder="键名")
      el-button(type="primary" @click="loadData") 读取数据
      el-button(type="danger" @click="removeData") 清除数据
</template>

<script>
export default {
  name: 'LocalStorageExample',
  data () {
    return {
      saveKey: '',
      loadKey: '',
      value: ''
    }
  },
  methods: {
    saveData () {
      if (!this.saveKey || !this.value) {
        this.$message({
          message: '请确保输入的键值不为空哦',
          type: 'warning'
        })
        return
      }
      console.log('save', this.value, 'to', this.saveKey)
      window.localStorage.setItem(this.saveKey, JSON.stringify(this.value))
      this.$message({
        message: `成功！将值${this.value}保存到${this.saveKey}之下`,
        type: 'success'
      })
    },
    loadData () {
      console.log('load', this.loadKey)
      if (!this.loadKey) {
        this.$message({
          message: '请确保输入的键名不为空哦',
          type: 'warning'
        })
        return
      }
      let value = JSON.parse(window.localStorage.getItem(this.loadKey) || '{}')
      this.$message({
        message: `成功！${this.loadKey}的值为${value}`,
        type: 'success'
      })
    },
    removeData () {
      if (!this.loadKey) {
        this.$message({
          message: '请确保输入的键名不为空哦',
          type: 'warning'
        })
        return
      }
      window.localStorage.removeItem(this.loadKey)
      this.$message({
        message: `成功！已移除${this.loadKey}`,
        type: 'success'
      })
    }
  }
}
</script>
