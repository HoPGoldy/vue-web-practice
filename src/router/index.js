import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'detail',
      component: detail
    }
  ]
})
