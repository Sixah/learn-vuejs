// 开发时依赖
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig,{
  // 搭建本地服务器配置
  devServer: {
    contentBase: './dist',
    inline: true
  }
});
