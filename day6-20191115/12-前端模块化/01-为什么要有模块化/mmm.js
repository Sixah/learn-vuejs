// 小明2
;(function () {
  // 1.想使用flag
  if (moduleA.flag) {
    console.log('小明是天才，哈哈哈');
  }

  // 2.想使用sum函数
  console.log(moduleA.sum(40, 59));
})();

// commonJs导入
// var aaa = require('./ming.js');
// var flag = aaa.flag;
// var sum = aaa.sum;

var {flag,sum} = require('./ming.js')
