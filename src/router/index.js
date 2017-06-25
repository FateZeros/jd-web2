import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/Login.vue'
import ForgetPwd from '../pages/ForgetPwd.vue'
import Register from '../pages/Register.vue'

/* 主页 模块 */
import Home from '../pages/home/Home.vue'
/* 我的资料 模块 */
import Mine from '../pages/mine/Mine.vue'
/* 购物车 */
import ShopCart from '../pages/ShopCart.vue'

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
    },
    {
      path: '/forget-pwd',
      component: ForgetPwd
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/shopcart',
      component: ShopCart
    }
  ]
})
