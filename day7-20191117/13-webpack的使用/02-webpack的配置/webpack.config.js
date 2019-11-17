// 导入node的path包，用来获取项目的绝对路径
const path = require('path');


module.exports = {
  // 项目入口
  entry: './src/main.js',
  // 打包到的文件路径
  output: {
    // 动态获取路径
    // __dirname是node的一个全局变量，保存有‘webpack.config.js’文件的绝对路径
    // 然后通过path.resolve拼接目录路径
    path: path.resolve(__dirname,'dist'),
    // 打包后的文件名字
    filename: 'bundle.js'
  },
};
