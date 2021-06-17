const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = webpackMerge(baseConfig, {
  plugins: [
    // 压缩 bundle.js 文件
    new uglifyJsPlugin()
  ]
});
