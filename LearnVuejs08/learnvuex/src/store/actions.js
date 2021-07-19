export default {
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
}
