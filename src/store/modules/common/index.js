
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import actions from './actions'

  export default {
  namespaced: true,
    state,
    actions
};
