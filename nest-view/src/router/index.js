import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles/:id',
      component: () => import('@/components/Article'),
      children: [
        { path: 'pages/:page_num', component: () => import('@/components/Page') }
      ]
    }
  ]
})
