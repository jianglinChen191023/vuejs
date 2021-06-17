// 1. 使用 commonjs 的模块化规范
const {add, mul} = require('./js/mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

// 2. 使用 ES6 的模块化的规范
import * as info from "./js/info.js";

console.log(info.name);
console.log(info.age);
console.log(info.height);

// 3. 依赖 css 文件
// 安装 css-loader: npm install --save-dev css-loader
// 配置 webpack.config.js:
//  module.exports = {
//   module: {
//    rules: [{
//      test: /\.css$/,
//      use: ['css-loader']
//    }]
//   }
//  }
require('./css/normal.css');

// 4. 依赖 less 文件
// npm install --save-dev less-loader@4.1.0
// npm install --save-dev less@3.0.0
require('./css/special.less');
document.write('<h2>hello, less</h2>');

// 5. 使用 Vue 进行开发
// 这个 vue 指向 node_modules > vue > dist > vue.esm.js 文件
import Vue from 'vue';
// import App from './vue/app.js'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App
  }
});