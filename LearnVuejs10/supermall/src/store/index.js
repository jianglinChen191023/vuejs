import Vue from 'vue';
import Vuex from 'vuex';

// 1. 安装插件
Vue.use(Vuex);

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      // payload 新添加的商品
      // let oldProduct = null;
      // for (const cartItem of state.cartList) {
      //   if (cartItem.id === payload.id) {
      //     oldProduct = cartItem;
      //   }
      // }

      // 1. 查找购物车数组中是否有该商品
      let oldProduct = state.cartList.find(item => item.id === payload.id);

      // 2. 判断 oldProduct
      if (oldProduct) {
        // 如果该商品已存在
        oldProduct.count++;
      } else {
        payload.count = 1;
        state.cartList.push(payload);
      }
    }
  },
  actions: {},
  getters: {},
  modules: {}
});

// 3. 导出 store 对象
export default store;
