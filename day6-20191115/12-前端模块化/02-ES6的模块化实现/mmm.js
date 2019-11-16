// 1.导入的{}中定义的变量
import {flag,sum} from "./aaa.js";
if (flag) {
  console.log('小明真好看');
  console.log(sum(10, 10));
}

// 2.直接导入export定义的变量
import {num1,height} from "./aaa.js";
console.log(num1,height)

// 3.导入export的function class
import {mu1,Person} from "./aaa.js"

console.log(mu1(200, 100));
const p = new Person();
console.log(p.run());

// 4.导入export default中的内容
import addr from "./aaa.js"

console.log(addr("你好"));

// 5.全部统一导入
// import {flag,num,num1,height,Person,Person,mu1,sum} from "./aaa.js"

import * as aaa from './aaa.js'

console.log(aaa.flag);
