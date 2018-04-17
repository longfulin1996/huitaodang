import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import api from './api'

Vue.use(Vuex)

const state = {
  count: 0,
  getMineBaseMsg: {
    errno: 1,
    msg: {}
  },
  getViewApi: {
    errno: 1,
    msg: {}
  },
  getHotSearchApi: {

  },
  getSearchRecord: {
    msg: []
  },
  getSearch: {
    errno: 1,
    msg: {}
  }
}

const getters = {
  getMineBaseMsg: state => state.getMineBaseMsg,
  getViewApi: state => state.getViewApi,
  // es6
  getHotSearchApi: state => state.getHotSearchApi
  // es5
  // getHotSearchApi: function (state) {
  //   return state.getHotSearchApi
  // }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
