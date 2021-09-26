import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject)=>{
      // 1. 查找购物车数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.id === payload.id);

      // 2. 判断 oldProduct
      if (oldProduct) {
        // 如果该商品已存在
        context.commit(ADD_COUNTER, oldProduct);
      } else {
        context.commit(ADD_TO_CART, payload);
      }

      resolve('添加成功, 在购物车等亲~');
    })
  }
}
