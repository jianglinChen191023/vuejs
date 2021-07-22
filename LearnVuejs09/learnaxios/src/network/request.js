import axios from 'axios'

// 三次优化
export function request(config) {
  // 1. 创建 axios 的实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  });

  // 2. axios 的拦截器
  // 配置请求和响应拦截
  instance.interceptors.request.use(config => {
    // 1. 比如 config 中一些信息不符合服务器的要求
    // 2. 比如每次发送网络请求时, 都希望在界面中显示一个请求的图标
    console.log('来到了 request 拦截 success 中')
    return config;
  }, err => {
    console.log('来到了 request 拦截 failure 中')
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    console.log('来到了 response 拦截 success 中')
    return res.data;
  }, err => {
    console.log('来到了 response 拦截 failure 中')
  })


  // 3. 发送真正的网络请求
  return instance(config);
}

// 三次
// export function request(config) {
//   new Promise((resolve, reject) => {
//     // 1. 创建 axios 的实例
//     const instance = axios.create({
//       baseURL: 'http://httpbin.org',
//       timeout: 5000
//     });
//
//     // 发送真正的网络请求
//     return instance(config);
//   });
// }

// 二次
// export function request(config) {
//   // 1. 创建 axios 的实例
//   const instance = axios.create({
//     baseURL: 'http://httpbin.org',
//     timeout: 5000
//   });
//
//   // 发送正在的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       console.log(res);
//       config.success(res);
//     })
//     .catch(err => {
//       console.log(err);
//       config.failure(err);
//     })
// }

// // 一次
// export function request(config, success, failure) {
//   // 1. 创建 axios 的实例
//   const instance = axios.create({
//     baseURL: 'http://httpbin.org',
//     timeout: 5000
//   });
//
//   // 发送正在的网络请求
//   instance(config)
//     .then(res => {
//       console.log(res);
//       success(res);
//     })
//     .catch(err => {
//       console.log(err);
//       failure(err);
//     })
// }
// //


