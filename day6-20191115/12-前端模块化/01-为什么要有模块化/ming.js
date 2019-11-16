// 小明
/*
var moduleA = (function () {
  // 导出对象
  var obj = {}

  var name = '小明';
  var age = 22;

  function sum(num1,num2) {
    return num1+num2
  }

  var flag = true

  if (flag) {
    console.log(sum(10, 20));
  }

  obj.flag = flag;
  obj.sum = sum;
  return obj
})();
*/

var moduleA = (function () {
  // 导出对象
  var obj = {}

  obj.flag = flag;
  obj.sum = sum;
  return obj
})();

var name = '小明';
var age = 22;

function sum(num1,num2) {
  return num1+num2
}

var flag = true

if (flag) {
  console.log(sum(10, 20));
}

// commonJs导出
module.exports = {
  flag: flag,
  sum: sum
};
