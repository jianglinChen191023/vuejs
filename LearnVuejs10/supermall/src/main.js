import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from "components/common/toast"

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue();

// 安装 toast 插件
Vue.use(toast);

// 解决移动端 300ms 延迟
FastClick.attach(document.body);

// 使用图片懒加载的插件
Vue.use(VueLazyload,{
  loading: require('./assets/img/common/placeholder.png')
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
