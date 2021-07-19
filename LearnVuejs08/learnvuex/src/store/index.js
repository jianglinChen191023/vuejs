import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

// 1. 安装插件
Vue.use(Vuex);

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'orange', age: 20}
    ],
    // 1. 定义信息, 响应式的
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
    b: moduleB
  }
});

// 3. 导出 store 对象
export default store;
