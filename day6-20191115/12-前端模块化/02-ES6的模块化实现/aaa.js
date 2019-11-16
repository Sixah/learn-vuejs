// 小明
var name = '小明';
var age = 18;
var flag = true;

function sum(num1,num2) {
  return num1+num2
}

if (flag) {
  console.log(sum(20, 20));
}

// 1.导出方式一
export {
  flag, sum
}

// 2.导出方式二
export var num1 = 1000;
export var height = 1.99;

// 3.导出函数
export function mu1(num1,num2) {
  return num1*num2
}

// 4.导出类
export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 5.export default 默认只能导出一个.同一模块下，默认导出只能导出一个，不能同时存在多个
// const address = '北京市'
// export default address

export default function (argument) {
  console.log(argument);
}
