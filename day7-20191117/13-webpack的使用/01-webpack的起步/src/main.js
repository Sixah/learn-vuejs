// 浏览器不识别commonjs代码 需要用webpack工具打包处理
// 命令 webpack ./src/main.js ./dist/bundle.js

// 1.使用commonjs的模块化规范
console.log('你真好看');
const {add,mul} = require('./mathUtils.js');
console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化规范
import {name,age,height} from "./info";
console.log(name);
console.log(age);
console.log(height);
