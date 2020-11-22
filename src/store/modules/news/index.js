import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  newsApi:"/news/newsList",
  newsList:""      //旅游资讯
}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
