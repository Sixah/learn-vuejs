## 学习Vue.js笔记
[[王红元老师]视频教程地址](https://www.bilibili.com/video/av59594689?from=search&seid=11169775368757894383)
- 各个知识点讲的很全面
- 评价超高的Vuejs视频教程

### webpack局部安装

`npm install webpack@3.6.0 --save-dev`

### loader局部安装

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

- vue-loader 解析.vue文件

`npm install --save-dev vue-loader vue-template-compiler`

### 引入Vue.js

`npm install vue --save`

### Plugin安装

- html-webpack-plugin 自动生成index.html文件，将打包的js文件自动通过script标签插入到body中

`npm install --save-dev html-webpack-plugin`

- uglifyjs-webpack-plugin 压缩打包的js文件

`npm install --save-dev uglifyjs-webpack-plugin@1.1.1`

### 搭建本地服务器

- webpack-dev-server

`npm install --save-dev webpack-dev-server@2.9.1`

### webpack配置分离

- webpack-merge

`npm install --save-dev webpack-merge`

###安装Vue脚手架(Vue-cli 3)

`npm install -g @vue/cli`

- #### Vue CLI3初始化项目

`npm create my-project`

选项 | 作用 |
:----: | :----: |
pick preset | 选择配置(default[默认]/Manually[手动]) |
placing config | Babel/PostCss/EsLint/etc..等配置文件存放位置(单独配置/package.json) |
save preset | 是否保存配置，以便下次使用 |


- #### 拉取2.x模板(旧版本)

`npm install -g @vue/cli-init`

- #### Vue CLI2初始化项目

`vue init webpack my-project`

选项 | 作用 |
:----: | :----: |
Project name | 项目名称 |
Project description | 项目描述 |
Author | 作者信息 |
Vue build | 选择Vue版本(Runtime-Compiler/Runtime-only) |
vue-router | vue路由器 |
ESLint | 是否启用es代码规范 |
Pick ESLint | 选择es代码规范 |
unit tests | 是否集成单元测试 |
e2e tests | 是否安装自动化测试框架 |
npm install | 选择npm包管理工具(npm/yarn) |

#### vue-cli3和vue-cli2版本的区别
- vue-cli3是基于webpack4打造，vue-cli2还是使用的webpack3
- vue-cli3的设计原则是“0配置”，移除的配置文件根目录下的`build`和`config`等目录
- vue-cli3提供了vue ui命令，提供了可视化配置，更加人性化
- 移除了`static`文件夹，新增了`public`文件夹，并且`index.html`移动到`public`中
