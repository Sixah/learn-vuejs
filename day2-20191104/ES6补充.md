###let/var
- 事实上`var`的设计可以看成JavaScript语言设计上的失误，但是这种错误多半不能修复和移除，因为需要向后兼容。
    - 大概十年前，Brendan Eich就决定修复这个问题，于是他添加了一个新的关键词：`let`
    - 我们可以将`let 看成更完美的`var`
- ###块级作用域
    - JS使用`var`来声明一个变量时，变量的作用域主要是和函数的定义有关
    - 针对于其他块定义来说是没有作用域的，比如`if`/`for`等，这往往会在我们开发中引起一些问题。
```js
// 监听按钮的点击
var btns = document.getElementsByTagName('button');
for (var i = 0; i < btns.length; i++) {
  (function(i) {
    btns[i].onclick = function() {
      alert('点击了'+ i +'个');
    }
  })(i)
}
```
```js
let btns = document.getElementsByTagName('button');
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      alert('点击了'+ i +'个');
    }
}
```
