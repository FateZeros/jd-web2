import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
// import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    'test': '1212'
  },
  mutations,
  actions
})

export default store
