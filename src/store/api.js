import Vue from 'vue'

const API_ROOT = 'http://localhost:8787/';

function fetch(path) {
  return new Promise((resolve, reject) => {
    Vue.http.get(API_ROOT + path).then((response) => {
      resolve(response.body)
    }, reject)
  });
}


module.exports = {

  fetchListData: function(num){
    return fetch(`list?num=${num}`).then((list) => {
      return list;
    })
  },

  fetchDetailData: function(uri){
    return fetch(`detail?url=${uri}`).then((images) => {
      return images;
    })
  }
  
};