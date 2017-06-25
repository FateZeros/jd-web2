import Vue from 'vue'
import * as types from '../constants/types'

export const homeSaleActions = {
	getHomeSale ({ commit, state, dispatch }) {
    return Vue.http.get('/api/home/sale')
      .then(response => {
        const code = response.data.code
        if (code === 200) {
          commit(types.SET_HOME_SALES, response.data.records)
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response.data)
        }
      })
  }
}