// 浏览器不识别commonjs代码 需要用webpack工具打包处理
// 命令 webpack ./src/main.js ./dist/bundle.js

// 1.使用commonjs的模块化规范
console.log('你真好看');
const {add,mul} = require('./js/mathUtils.js');
console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化规范
import {name,age,height} from "./js/info";
console.log(name);
console.log(age);
console.log(height);

// 安装本地版本的webpack(局部安装)
// npm install webpack@3.6.0 --save-dev

// 3.依赖css文件
// 安装css-loader 帮助webpack解析css文件
// npm install --save-dev css-loader
require('./css/normal.css');

// 4.依赖less文件
require('./css/special.less');
// 向DOM中添加标签
document.writeln('<h2>Sixah</h2>');

// 5.使用Vue进行开发
// Vue在打包中有两个版本
// 1.runtime-only 代码中，不可以有任何的template代码
// 2.runtime-compiler 代码中，可以有template,因为有compiler可以用于编译template代码

import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'
new Vue({
  el:'#app',
  template: '<App/>',
  components: {
    App
  }
});
