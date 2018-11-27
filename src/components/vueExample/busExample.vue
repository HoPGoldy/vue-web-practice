<style lang="stylus" scoped>
</style>

<template lang="pug">
.container
  comp1
  comp2
</template>

<script>
import comp1 from './communicate/comp1.vue'
import comp2 from './communicate/comp2.vue'
export default {
  name: 'bus',
  components: { comp1, comp2 },
  data () {
    return {

    }
  }
}
</script>
