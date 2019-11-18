### 学习Vue.js笔记
[[王红元老师]视频教程地址](https://www.bilibili.com/video/av59594689?from=search&seid=11169775368757894383)
- 各个知识点讲的很全面
- 评价超高的Vuejs视频教程

####webpack局部安装
`npm install webpack@3.6.0 --save-dev`
####loader局部安装
- css-loader 加载解析css文件
`npm install --save-dev css-loader`
- style-loader 应用解析后的css到DOM中
`npm install --save-dev style-loader`
- less-loader 加载和转译less文件
`npm install --save-dev less-loader less`
- url-loader 将文件发送到输出文件夹，并返回(相对)URL，但如果文件小于限制，可以返回data URL
`npm install --save-dev url-loader`
- file-loader 将文件发送到输出文件夹，并返回(相对)URL
`npm install --save-dev file-loader`
- babel-loader ES6语法转化ES5
`npm install --save-dev babel-loader@7 babel-core babel-preset-es2015`
####引入Vue.js
`npm install vue --save`
