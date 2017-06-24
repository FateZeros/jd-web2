import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
  	login: modules.login
  }
})

export default store


