import Vue from 'vue'
import VueResource from 'vue-resource'
import { mapState } from 'vuex'

import store from './store'
import router from './router'

// import './style/index.scss'

Vue.use(VueResource)

Vue.filter('toDate', date => {
  const d = new Date(date)
  return d.getFullYear() + '年' +
    (d.getMonth() + 1) + '月' +
    d.getDate() + '日'
})

new Vue({
  router,
  store
}).$mount('#front-jd')
