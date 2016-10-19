import Vue from 'vue'

const API_ROOT = 'http://192.168.1.50:8787/';

function fetch(path) {
  return new Promise((resolve, reject) => {
    Vue.http.get(API_ROOT + path).then((response) => {
      resolve(response.body)
    }, reject)
  });
}


module.exports = {

  fetchListData: function(num){
    return fetch(`list?num=${num}`).then((data) => {
      return data;
    })
  },

  fetchDetailData: function(uri){
    uri = encodeURIComponent(uri);
    return fetch(`detail?link=${uri}`).then((data) => {
      return data;
    })
  }
  
};