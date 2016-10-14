import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
//import store from './store'
//import {sync} from 'vuex-router-sync'
import router from './router'

//sync(store, router)

Vue.use(VueResource)

const app = new Vue({
  router,
  //store,
  el: '#app',
  render: h => h(App)
})


