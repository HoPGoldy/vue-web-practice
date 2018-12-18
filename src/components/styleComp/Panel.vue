<style lang="stylus" scoped>
panelWidth = 380px
.container
  position relative
  .left-panel
    position absolute
    top 0px
    left 0px
    bottom 0px
    width panelWidth
    background-color white

    transition left 0.5s ease-in-out
    z-index 99
    &.is-collapse
      left -(panelWidth)
    .collapse
      position absolute
      width 32px
      height @width
      line-height @width
      text-align center
      bottom 0
      right -34px
      background-color rgba(255, 255, 255, 0.36)
      box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.2)
      font-size 14px
      color #ffffff
      cursor pointer
      font-weight 800
      z-index 0
      > li > i
        transition transform 0.2s ease-in-out
        transform rotate(0deg)
        &.is-close
          transform rotate(-180deg)
    nav
      position absolute
      top 50%
      transform translate3d(0, -50%, 0)
      left calc(100% + 2px)
      display flex
      flex-direction column
li
  list-style none
  cursor pointer
  width 32px
  height @width
  line-height @width
  border-radius 0 4px 4px 0
  box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.2)
  font-size 20px
  text-align center
  margin-bottom 4px
  color white
  background-color rgba(255, 255, 255, 0.36)
  transition width 0.3s
  white-space nowrap
  position relative
  span
    height 0
    width 0
    font-size 13px
    text-align center
    vertical-align top
    transition width 0.3s
    display inline-block
    overflow hidden
  &.is-active
    background-color #008DFF
  &:hover
    background-color #008DFF
    width 110px
    span
      width 70px
      height 38px
</style>

<template lang="pug">
.container
  .left-panel(:class="{'is-collapse': isPanelCollapse}")
    .collapse
      li(@click="isPanelCollapse = !isPanelCollapse" )
        i.el-icon-arrow-left(:class="{'is-close': isPanelCollapse}")
        span {{isPanelCollapse? "展开" : "收起"}}
    nav
      li(v-for="v in view.option" @click="setView(v.key)" :key="v.key" :class="{'is-active': v.key==view.current}")
        i(:class="v.icon")
        span {{v.label}}
</template>

<script>
export default {
  name: 'Panel',
  data: () => ({
    view: {
      current: 'first',
      last: 'first',
      option: [
        {
          key: 'first',
          label: '选项1',
          icon: 'el-icon-message'
        },
        {
          key: 'second',
          label: '选项2',
          icon: 'el-icon-service'
        },
        {
          key: 'third',
          label: '选项3',
          icon: 'el-icon-bell'
        }
      ]
    },
    isPanelCollapse: true
  }),
  methods: {
    setView (key) {
      this.isPanelCollapse = false
      this.view.last = this.view.current
      this.view.current = key
    }
  }
}
</script>
