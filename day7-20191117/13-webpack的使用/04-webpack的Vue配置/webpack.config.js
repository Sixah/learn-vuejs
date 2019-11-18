// 导入node的path包，用来获取项目的绝对路径
const path = require('path');


module.exports = {
  // 项目入口： 可以是字符串/数组/对象，这里我们的入口只有一个，所以写一个字符串
  entry: './src/main.js',
  // 出口： 打包到的文件路径，通常是一个对象，里面至少包含两个重要的属性，path和filename
  output: {
    // path,通常是一个绝对路径，动态获取路径
    // __dirname是node的一个全局变量，保存有‘webpack.config.js’文件的绝对路径
    // 然后通过path.resolve拼接目录路径
    path: path.resolve(__dirname,'dist'),
    // 打包后的文件名字
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        // 正则表达式 匹配.css文件结尾的文件
        // 应用use配置的loader
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // 解析css文件后，使用import加载，并且返回css代码

        // style-loader将模块的导出作为样式添加到DOM中
        // npm install --save-dev style-loader

        // 使用多个loader时，是从右向左应用
        use: ['style-loader','css-loader']
      },
      {
        // 正则表达式 匹配.less文件结尾的文件
        // 应用use配置的loader
        test: /\.less$/,
        // less-loader负责加载和转译less文件为css文件

        // css-loader只负责将css文件进行加载
        // 解析css文件后，使用import加载，并且返回css代码

        // style-loader将模块的导出作为样式添加到DOM中
        // npm install --save-dev style-loader

        // 使用多个loader时，是从右向左应用
        use: [{
          loader: 'style-loader'
        },{
          loader: 'css-loader'
        },{
          loader: 'less-loader'
        }]
      },
      {
        // 正则表达式 匹配.png|.jpg|.gif|.jpeg文件结尾的文件
        // 应用use配置的loader
        test: /\.(png|jpg|gif|jpeg)$/,
        // url-loader 将文件发送到输出文件夹，并返回(相对)URL，但如果文件小于限制，可以返回data URL

        // 使用多个loader时，是从右向左应用
        use: [{
          loader: 'url-loader',
          options: {
            // 当加载的图片，小于limit时，会将图片编译成base64字符串样式
            // 当加载的图片，大于limtt时，需要使用file-loader模块进行加载
            limit: 8192,
            // 给图片制定存放位置和命名规则
            // [name] -> 图片原来的名称
            // [hash:8] -> 名称hash值的前八位
            // [ext] -> 图片后缀
            name: '/img/[name].[hash:8].[ext]'
          },
        }]
      },
      {
        // 正则表达式 匹配.js文件结尾的文件
        // 应用use配置的loader
        test: /\.js$/,
        // 排除node_modules文件夹，不做转化
        exclude: /(node_modules|bower_components)/,
        // babel-loader ES6语法转化ES5语法

        // 使用多个loader时，是从右向左应用
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          },
        }]
      }
    ]
  },
  resolve: {
    // alias: 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
