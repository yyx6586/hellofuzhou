import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {

  //登录

  loginApi:"/user/login",
  account:"",
  password:"",
  code:"",         //登录成功返回为 1
  msg:"",          //登录成功返回来的信息

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
