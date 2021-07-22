import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://httpbin.org/get',
//   // 专门针对 get 请求的参数拼接
//   // params: {
//   //   type: 'pop',
//   //   page: 1
//   // }
// }).then(res => {
//   console.log(res);
// })
//
// axios({
//   url: 'http://httpbin.org/get',
//   // 专门针对 get 请求的参数拼接
//   // params: {
//   //   type: 'pop',
//   //   page: 1
//   // }
// }).then(res => {
//   console.log(res);
// })

// axios.all([
//   axios({
//     url: 'http://httpbin.org/get',
//   }),
//   axios({
//     url: 'http://httpbin.org/get',
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// 创建我们对应的 axios 的实例
const instance1 = axios.create({
  baseURL: 'http://139.196.56.127:8000',
  timeout: 5000,
})

const instance2 = axios.create({
  baseURL: 'http://139.196.56.127:8001',
  timeout: 5000,
})

const instance3 = axios.create({
  baseURL: 'http://139.196.56.127:8002',
  timeout: 5000,
})

// 封装 request 模块
import {request} from "./network/request";

// 一次
// request({
//   url: '/get'
// }, res => {
//   console.log("fsdf" + res);
// }, err => {
//
// })

// 二次
// request({
//   baseConfig: {
//     url: '/get'
//   },
//   success: function (res) {
//   },
//   failure: function (err) {
//
//   }
// })

// 三次
request({
  url: '/get'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
