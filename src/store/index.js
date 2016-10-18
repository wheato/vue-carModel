import Vue from 'vue'
import Vuex from 'vuex'
import * as api from './api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: 1,
    postList: {},
    detailData: {}
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
      return api.fetchDetailData(link).then(detailData => commit('SET_IMAGES', {detailData}))
    }

  },

  mutations: {
    SET_CURRENT_PAGE (state, {num}) {
      state.currentPage = num[0];
    },

    SET_LIST (state, {body}){
      state.postList = body;
    },

    SET_IMAGES (state, {detailData}){
      state.detailData = detailData;
    }
  },

  getters: {
    currentPage (state){
      return state.currentPage
    }
  }
});