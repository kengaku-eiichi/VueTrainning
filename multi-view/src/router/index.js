import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: () => import('@/components/HelloWorld'),
        sub: () => import('@/components/Article')
      }
    }
  ]
});
