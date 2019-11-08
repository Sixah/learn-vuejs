// 编程范式： 命令式编程/声明式编程
// 编程范式： 面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
// filter/map/reduce


const nums = [10,20,111,222,444,40,50];

// 1.需求： 找出所有小于100的元素
// let newNums= [];
// for (let n of nums) {
//   if (n < 100) {
//     newNums.push(n);
//   }
// }

// filter()方法
// filter中的回调函数有一个要求： 必须返回一个boolean值
// true: 当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false: 当返回false时，函数内部会过滤掉这次的n
let newNums = nums.filter(function (n) {
  return n < 100
});


// 2.需求： 将所有小于100的数字进行转化： 全部*2
// let new2Nums = [];
// for (let n of newNums) {
//   new2Nums.push(n*2);
// }

// map()方法
// map会将数组中的每一个元素在回调函数的返回值加入到新的数组中
let new2Nums = nums.map(function (n) {
  return n*2
})

// 3.需求： 求new2Nums的所有元素的和
// let total = 0;
// for (let n of new2Nums) {
//   total += n;
// }

// reduce()方法
// reduce对数组中所有的元素进行汇总
// 第一次： prevalue=0 n=20
// 第二次： prevalue=20 n=40
// 第三次： prevalue=60 n=80
// 第四次： prevalue=140 n=100
// return 240
let total = new2Nums.reduce(function (preValue,n) {
  return preValue + n
},0);

// 还是以上三种需求，但需要直接获得最终结果
// let total2 = nums.filter(function (n) {
//   return n < 100
// }).map(function (n) {
//   return n * 2
// }).reduce(function (preValue,n) {
//   return preValue + n
// },0);
// 简洁写法
let total2 = nums.filter(n => n <100).map(n => n * 2).reduce((pre,n) => pre + n);
console.log(total);
