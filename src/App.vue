<style lang="stylus">
#app
  position relative
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin 0px 70px
.title
  font-size 40px
  font-weight bolder
  transition font-size .3s, width .3s, margin .3s
  margin 16px 0px
  width 100%
  &.is-left
    width 300px
    font-size 30px
.logo
  position absolute
  z-index -1
  left calc(50% - 100px)
  top -30px
  opacity .6
  transition opacity .3s
  &.is-hide
    opacity 0
</style>

<template lang="pug">
  #app
    img.logo(:class="{'is-hide': !showLogo}", src="./assets/logo.png")
    el-tooltip(content="点此展开/收起logo", placement="bottom")
      .title(@click="showLogo = !showLogo", :class="{'is-left': !showLogo}") {{title}}
    el-tabs(v-model="activeName", @tab-click="showLogo = false")
      el-tab-pane(label="细节", name="detail")
        detail
      el-tab-pane(label="表格", :lazy="true", name="chart")
        chart
      el-tab-pane(label="Vue", name="vue")
        aboutVue
      el-tab-pane(label="样式", name="stylus")
        istyle
      el-tab-pane(label="地图", :lazy="true", name="imap")
        imap
</template>

<script>
import detail from './components/detail.vue'
import chart from './components/chart.vue'
import aboutVue from './components/aboutVue.vue'
import imap from './components/imap.vue'
import istyle from './components/istyle.vue'

export default {
  name: 'App',
  data: () => ({
    title: '前端技术实践项目',
    showLogo: true,
    activeName: 'detail'
  }),
  components: { detail, chart, aboutVue, imap, istyle }
}
</script>
