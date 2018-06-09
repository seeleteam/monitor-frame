import Vue from 'vue'
import vuex from 'vuex'
// 引入某个store对象
import dialogStore from './dialog_store.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    dialog: dialogStore
  }
})
