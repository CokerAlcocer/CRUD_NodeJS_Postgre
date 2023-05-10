import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/index'
  },{
    path: '/index',
    name: 'PeopleView',
    component: () => import('@/modules/person/adapters/view/PeopleView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
