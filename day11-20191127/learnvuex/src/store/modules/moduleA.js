export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  actions: {
    // 这里的context指的是moduleA对象
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName','wangwu')
      },1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + " nigulasi"
    },
    fullName2(state,getters) {
      return getters.fullName + ' zhao'
    },
    fullName3(state,getters,rootState) {
      getters.fulName2
      return getters.fullName2 + rootState.counter
    }
  }
}
