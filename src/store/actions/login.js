import Vue from 'vue'
import * as types from '../constants/types'

export const loginActions = {
	login ({ commit, state, dispatch }, payload) {
    return Vue.http.post('/api/login', payload)
      .then(response => {
        const code = response.data.code
        switch (code) {
          case 200:
            commit(types.SET_USER, payload)
            return Promise.resolve(response.data)
            break
          case 40001:
            return Promise.reject(response.data)
            break
          case 40002:
            return Promise.reject(response.data)
            break
          default:
            return Promise.reject(response.data)
            break
        }
      })
  },
  register(state, payload) {
    //暂时走vuex
    return Vue.http.post('/api/register', payload)
      .then(response => {
        // console.log(response)
        const code = response.data.code
        if (code === 200) {
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response.data)
        }
      })
  }
}