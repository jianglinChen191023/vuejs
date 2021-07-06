import Vue from 'vue'
import App from './App'
// 导入目录会自动找 index 文件
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

console.log(router);
