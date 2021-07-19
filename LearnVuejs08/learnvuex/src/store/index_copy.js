import Vue from 'vue';
import Vuex from 'vuex';

import {INCREMENT} from './mutations-type'

// 1. 安装插件
Vue.use(Vuex);

// 2. 创建对象
const moduleA = {
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

const moduleB = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}

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
  mutations: {
    updateInfo(state) {
      // 禁止使用异步操作, devtools 会记录错误信息
      // setTimeout(() => {
      //   state.info.name = 'orange';
      // }, 1000);

      // 添加属性
      state.info['address'] = '洛杉矶';
      Vue.set(state.info, 'address2', '洛杉矶2');

      // 删除属性
      delete state.info.age;
      Vue.delete(state.info, 'age');
    },
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // incrementCount(state, count) {
    //   state.counter += count;
    // },
    incrementCount(state, payload) {
      // {type: "incrementCount", count: 5}
      console.log(payload);
      state.counter += payload.count;
    },
    addStudent(state, stu) {
      state.students.push(stu);
    }
  },
  actions: {
    // context: 上下文 ( 现在是store对象 )
    aUpdateInfo(context, payload) {
      setTimeout(() => {
        // 禁止直接修改, 必须使用 mutations 修改 state 属性
        // context.state.info.name = 'orange';
        context.commit('updateInfo');
        console.log(payload.message);
        payload.success();
      }, 1000);
    },
    aUpdateInfo2(context, payload) {
      return new Promise((resolve, reject) => {
        context.commit('updateInfo');
        console.log(payload);

        resolve('完成');
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    more20stu(state) {
      return state.students.filter(s => s.age >= 20);
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length;
    },
    moreAgestu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }

      return age => state.students.filter(s => s.age > age)
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
});

// 3. 导出 store 对象
export default store;
