export default {
  // state
  state: {
    show: false
  },
  getters: {
    // 这里的state对应着上面这个state
    not_show (state) {
      return !state.show
    }
  },
  mutations: {
    // 这里的state对应着上面这个state
    switch_dialog (state) {
      // 你还可以在这里执行其他的操作改变state
      state.show = state.show ? !true : true
    }
  },
  actions: {
    // 这里的context和我们使用的$store拥有相同的对象和方法
    switch_dialog (context) {
      // 你还可以在这里触发其他的mutations方法
      context.commit('switch_dialog')
    }
  }
}
