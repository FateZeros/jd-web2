import Vue from 'vue'

const startLoading = commit => {
  commit('LOADING_TOGGLE', true)
  return Date.now()
}

const endLoading = (commit, start, timeAllowed = 400) => {
  const spareTime = timeAllowed - (Date.now() - start)
  setTimeout(commit, spareTime > 0 ? spareTime : 0, 'LOADING_TOGGLE', false)
}

export default {
  getUser ({ commit }, id) {
    const start = startLoading(commit)
    return Vue.http.get('/api/getUser', { params: { id } })
      .then(response => {
        endLoading(commit, start)
        commit('SET_USER', response.data)
      })
  },
  login ({ commit }, payload) {
    return Vue.http.post('/api/login', payload)
      .then(response => {
        const code = response.data.code
        if (code === 200) {
          commit('SET_USER', payload)
          // console.log(1212)
        } else {
          return Promise.reject(response.data)
        }
        // switch (code) {
        //   case 200:
        //     commit('SET_USER', payload)
        //     // console.log(1212)
        //     break
        //   case 40001:
        //     return Promise.reject(response.data)
        //     break
        //   case 40002:
        //     return Promise.reject(response.data)
        //     break
        //   default:
        //     return Promise.reject(response.data)
        //     break
        // }
      })
  },
  register(state, payload) {
    //暂时走vuex
    return Vue.http.post('/api/register', payload)
      .then(response => {
        console.log(response)
        const code = response.data.code
        if (code === 200) {
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response.data)
        }
      })
  }
}
