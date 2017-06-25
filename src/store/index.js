import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import modules from './modules'

const store = new Vuex.Store({
  modules: {
  	login: modules.login,
  	homeSale: modules.homeSale,
  	homeSeckill: modules.homeSeckill
  }
})

export default store


