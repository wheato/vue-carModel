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
      return api.fetchListData(num).then(body => commit('SET_LIST', {body}))
    },

    nextPage: ({dispatch, state}) => {

    },

    prevPage: ({dispatch, state}) => {

    },

    getDetail: ({commit, dispatch, state}, {link}) => {
      return api.fetchDetailData(link).then(images => commit('SET_IMAGES', {images}))
    }

  },

  mutations: {
    SET_CURRENT_PAGE (state, {num}) {
      state.currentPage = num[0];
    },

    SET_LIST (state, {body}){
      state.postList = body;
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