import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
// import "../static/css/iconfont.css"

import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.returnPage = function () {
  window.history.go(-1)
}

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


