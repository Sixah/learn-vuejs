import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false

// 数组的解构
const names = ['kobe','alan','james']
const[name1,name2,name3] = names

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1.axios的基本使用
/*axios({
  url: 'http://123.207.32.32:8000/home/multidata',
}).then(res => {
  console.log(res);
})*/

/*axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'post',
  // post请求 数据存放在data中，不能放在params中
  data: {
    type: 'sell',
    page: 3
  }
}).then(res => {
  console.log(res);
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  // 专门处理get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  },
  // 请求方法 默认get请求
  method: 'get'
  // .then() Promise的异步处理方法，接口调用成功，返回的数据传到then中
}).then(res => {
  console.log(res);
})*/

// 2.axios发送并发请求
/*axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }),
  axios({
    url: 'http://123.207.32.32:8000/home/data',
    // 专门处理get请求的参数拼接
    params: {
      type: 'pop',
      page: 1
    },
    // 请求方法
    method: 'get'
  })]).then(result => {
    // 所有请求结果
    console.log(result);
    // 请求1
    console.log(result[0]);
    // 请求2
    console.log(result[1]);
  })*/

// 3.axios的全局配置
/*axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios.all([
  axios({
    url: '/home/multidata'
  }),
  axios({
    url: '/home/data',
    // 专门处理get请求的参数拼接
    params: {
      type: 'pop',
      page: 1
    },
    // 请求方法
    method: 'get'
  })]).then(axios.spread((res1,res2) => {
  // 请求1
  console.log(res1);
  // 请求2
  console.log(res2);
}))*/

// 4.创建对应的axios实例
/*const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})*/

// instance1({
//   url: '/home/multidata'
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 2
//   }
// }).then(res => {
//   console.log(res);
// })


// 5.封装request模块
/*import {request} from "./network/request";

request({
  url: '/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})*/

/*request({
  baseConfig: {

  },
  success: function (res) {

  },
  failure: function (err) {

  }
})*/

/*request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})*/

import {request1} from "./network/request";

request1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
