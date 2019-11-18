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
