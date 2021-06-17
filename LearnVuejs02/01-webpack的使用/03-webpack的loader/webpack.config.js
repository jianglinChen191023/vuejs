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
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader 只解析 css 文件
        // 安装 style-loader, 将模块的导出作为样式添加到 DOM 中
        // npm stall style-loader --save-dev
        use: ['style-loader', 'css-loader'] // webpack 使用 loader 的顺序: 从右到左
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片, 小于 limit 时, 会将图片编译成 base64 字符串形式
              // 当加载的图片, 大于 limit 时, 需要使用 file-loader 模块进行加载 npm install --save-dev file-loader@2.0.0
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude 排除
        // include 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'es2015'
          }
        }
      }
    ]
  }
}