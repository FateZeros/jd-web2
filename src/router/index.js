import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
    	path: '/login',
    	component: Login
    },
    {
    	path: '/home',
    	component: Home
    }
  ]
})
