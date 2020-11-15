// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import qs from 'qs'

Vue.prototype.jquery = $
Vue.prototype.qs = qs
Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //使用store
  components: { App },
  template: '<App/>'
})
