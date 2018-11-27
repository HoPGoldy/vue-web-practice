<style lang="stylus" scoped>
.container
  .el-input
    margin-bottom 10px
</style>

<template lang="pug">
.container
  el-input(v-model="urlInput", placeholder="请输入地址")
    template(slot="prepend") 地址
  el-input(v-model="argInput", placeholder="请输入参数")
    template(slot="prepend") 参数
  el-button(@click="getMsg") 提交请求
</template>

<script>
export default {
  name: 'sendAjax',
  data () {
    return {
      urlInput: 'http://192.168.43.202:8080/spring-helloworld/home/test/',
      argInput: 'hello'
    }
  },

  methods: {
    getMsg: function (event) {
      console.log(`向${this.urlInput}发送请求，参数为${this.argInput}`)
      this.$notify({
        title: '请求已提交',
        message: `目标地址: ${this.urlInput} , 携带参数为${this.argInput}`
      })

      this.$http.get(this.urlInput, {
        params: {
          arg: this.argInput
        }
      }).then(result => {
        console.log(result)
        this.$notify.success({
          title: '请求成功',
          message: `返回值为${result.data}`
        })
      }).catch(err => {
        this.$notify.error({
          title: '请求失败',
          message: `${err}`
        })
      })
    }
  }
}
</script>
