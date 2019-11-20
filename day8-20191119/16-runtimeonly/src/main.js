import Vue from 'vue'
import App from './App'

// 此时导入的App组件中，是被编译处理过的，已经没有了template模板了

// .vue文件中的template是由谁处理的呢？
// 是由vue-template-compiler的loader处理的

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // h -> createElement函数的简写
  // 1.createElement('标签',{‘标签的属性’},['标签内容'])
  render: h => h(App)
})
