<template lang="pug">
  .hello
    h2 前端技术栈
    el-row(v-for="detailRow in detailInfo", :key="detailRow" type="flex", justify="center")
      el-col(:span="4", v-for="item in detailRow", :key="item.url")
        div(class="detail-item")
          a(:href="item.url") {{item.content}}
</template>

<script>
export default {
  name: 'detail',
  data: () => ({
    detailInfo: [
      [
        {url: 'https://cn.vuejs.org/index.html', content: 'js框架 - Vue'},
        {url: 'https://pugjs.org/zh-cn/api/getting-started.html', content: '模板语言 - Pug'},
        {url: 'https://stylus.bootcss.com/', content: '预编译样式 - Stylus'}
      ],
      [
        {url: 'http://element-cn.eleme.io/#/zh-CN', content: '组件库 - Element'},
        {url: 'https://v-charts.js.org/#/', content: '表格显示 - VCharts'},
        {url: 'https://yarnpkg.com/zh-Hans/', content: '包管理器 - Yarn'}
      ]
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.detail-item
  margin: 25px
  padding: 15px
  background: #e5e9f2
  border-radius: 6px
</style>
