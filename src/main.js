
import Vue from 'vue'
Vue.config.productionTip = false

import App from './App'

import store from './store/store'
import Vuex from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import axios from 'axios'
Vue.use(axios)
// Vue.prototype.$axios = axios
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.baseURL = 'http://192.168.0.27:8090';
axios.defaults.withCredentials = true


import router from './router'

new Vue({
  el: '#app',
  router,
  store,//使用store
  template: '<App/>',
  render: h => h(App),
  methods:{
    checkLogin(){
      //检查是否存在session
      //cookie操作方法在源码里有或者参考网上的即可
      if(!this.getCookie('session')){
        //如果没有登录状态则跳转到登录页
        this.$router.push('/login');
      }else{
        //否则跳转到登录后的页面
        this.$router.push('/user_info');
      }
    }
  }

})