import Vue from 'vue'
import * as types from '../constants/types'

export const homeCuffRankActions = {
	getHomeCuffRank ({ commit, state, dispatch }) {
    return Vue.http.get('/api/home/cuffRank')
      .then(response => {
        const code = response.data.code
        if (code === 200) {
          commit(types.SET_HOME_CUFFRANK, response.data.data)
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response.data)
        }
      })
  }
}