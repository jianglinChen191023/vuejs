export default {
  state: {
    name: 'moduleA'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    aUpdateName(context){
      setTimeout(() => {
        // context 上下文, 当前对象
        // context.commit() 调用当前对象中的
        context.commit('updateName', 'wangwu')
      }, 1000);
    }
  },
  getters: {
    fullname(state) {
      return state.name;
    },
    fullname2(state, getters){
      return getters.fullname + '222';
    },
    fullname3(state, getters, rootState){
      return getters.fullname2 + rootState.counter;
    }
  }
}
