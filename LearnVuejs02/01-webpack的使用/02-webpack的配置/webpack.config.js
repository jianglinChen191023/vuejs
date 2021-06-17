// - node 对应的包, 在依赖的包中:
//  - npm init
const path = require('path');

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    // __dirname node 全局变量中 package.json 文件所存在的路径
    // 会拼接 dist
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}