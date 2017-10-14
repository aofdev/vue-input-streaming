import Vue from 'vue'
import Router from 'vue-router'
const Input = () => import('@/components/Input')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Input',
      component: Input
    }
  ]
})
