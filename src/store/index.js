import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
// import getters from './getters'

import cart from './modules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    'isLoading': false,
    'user': { name: '', pwd: '' }
  },
  actions,
  modules: {
  	cart
  },
  mutations
})

export default store


