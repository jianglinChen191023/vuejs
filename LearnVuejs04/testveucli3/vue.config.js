const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 1. 基础的配置方式
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       'components': '@/components',
  //       'pages': '@/pages'
  //     }
  //   }
  // },

  // 2. 利用 webpack4 的 webpack-chain 来配置
  chainWebpack: (config) => {
    config.resolve.alias
        .set('@$', resolve('src'))
        .set('components', resolve('src/components'));
  }
}