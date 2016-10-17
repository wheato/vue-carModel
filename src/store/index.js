import Vue from 'vue'
import Vuex from 'vuex'
import * as api from './api'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentPage: 1,
    postList: {},
    imageList: {}
  },

  actions: {
    getPostList: ({commit, dispatch, state}, {num}) => {
      commit('SET_CURRENT_PAGE', {num});
      return api.fetchListData(num).then(list => commit('SET_LIST', {list}))
    },

    nextPage: ({dispatch, state}) => {

    },

    prevPage: ({dispatch, state}) => {

    }
  },

  mutations: {
    SET_CURRENT_PAGE (state, {num}) {
      console.log(num);
      state.currentPage = num[0];
    },

    SET_LIST (state, {list}){
      console.log(list);
      state.postList = list;
    },

    SET_IMAGES (state, {images}){
      state.imageList = images;
    }
  },

  getters: {
    currentPage (state){
      return state.currentPage
    }
  }
});