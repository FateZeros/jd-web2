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
        switch (code) {
          case 200:
            commit('SET_USER', payload)
            // console.log(1212)
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
  }
}
