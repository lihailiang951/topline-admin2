import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      // 无论你当前模块在哪里，@都可以直接定位到 src
      // 加载一个目录可以默认加载他的 index.js index.vue index.json...
      // component: () => import('@/views/home/index.vue')
      component: () => import('@/views/home')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    }
  ]
})
