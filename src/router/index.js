import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/:num', name: 'list', component: ListView},
    { path: '/detail/:link', name: 'detail', component: DetailView },
    { path: '*', redirect: `/1` }
  ],
  scrollBehavior(to, from, savedPosition) {
    if(to.name == 'list' && from.name == 'detail'){
      if(savedPosition){
        return savedPosition;
      } else {
        return {x: 0, y: 0}
      }
    }

  }
})