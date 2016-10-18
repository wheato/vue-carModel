import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    { path: '/:num', component: ListView},
    { path: '/detail/:link', component: DetailView },
    { path: '*', redirect: `/1` }
  ]
})