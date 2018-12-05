<template lang="pug">
  div(class="container")
    el-row(:gutter="40")
      el-col(:span="12")
        lineChart
      el-col(:span="12")
        histogramChart
</template>

<script>
import lineChart from './charts/ve-line.vue'
import histogramChart from './charts/ve-histogram.vue'
export default {
  name: 'chart',
  components: { lineChart, histogramChart }
}
</script>

<style lang="stylus" scoped>
.container
  margin 20px 70px
</style>
