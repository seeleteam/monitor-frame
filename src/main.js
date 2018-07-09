// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import { Menu, MenuItem, Row, Col } from 'element-ui'
import vuex from 'vuex'

Vue.use(vuex)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
