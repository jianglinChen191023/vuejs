// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

console.log(App);

// const cpn = {
//   template: '<div>{{message}}</div>',
//   data(){
//     return {
//       message: '我是组件message'
//     }
//   }
// }

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: createElement => {
    // 1. 普通用法: createElement('标签' , {标签的属性}, [''])
    // h2 这个标签会替换掉 挂载的app
    // return createElement('h2', {class: 'box'}, ['Hello World'])
    // return createElement('h2', {class: 'box'}, ['Hello World', createElement('button', ['按钮'])])

    // 2. 传入一个组件对象
    // return createElement(cpn);
    return createElement(App);
  }
})
