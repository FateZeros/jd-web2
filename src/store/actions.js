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
    console.log(payload)
    return Vue.http.post('/api/login', payload)
      .then(response => {
        if (response.data.state === 1) {
          commit('SET_USER', payload)
        } else {
          return Promise.reject(response.data.msg)
        }
      })
  }
}
