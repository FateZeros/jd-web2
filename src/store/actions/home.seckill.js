import Vue from 'vue'
import * as types from '../constants/types'

export const homeSeckillActions = {
	getHomeSeckill ({ commit, state, dispatch }) {
    return Vue.http.get('/api/home/seckill')
      .then(response => {
        const code = response.data.code
        if (code === 200) {
          commit(types.SET_HOME_SECKILL, response.data.data)
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response.data)
        }
      })
  }
}