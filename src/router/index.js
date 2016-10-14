import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/:page', component: ListView},
    { path: '/detail/:link', component: DetailView },
    { path: '*', redirect: `/1` }
  ]
})