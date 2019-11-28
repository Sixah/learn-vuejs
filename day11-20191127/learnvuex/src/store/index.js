import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 对象的解构
const obj = {
  name: 'kobe',
  age: 19,
  height: 198,
  address: '洛杉矶'
}

// 这里的属性顺序不是固定的，是按照名字解析，而不是按照顺序
const {name,height,age} = obj

// 1.安装插件
Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {id:110,name:'sixah',age:18},
    {id:111,name:'kobe',age:16},
    {id:112,name:'james',age:19},
    {id:113,name:'curry',age:17}
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 198
  }
}

// 2.创建对象
const store = new Vuex.Store({
  // 保存数据，数据的状态是响应式的
  // 单一数据源，建议只创建一个store对象
  // 数据属性必须是提前初始化好的
  // 这些数据属性都会被加入到响应式系统中，响应式系统会监听属性的变化
  // 当属性发生变化时，会通知所有用到该属性的界面刷新，更新数据
  state,
  // 类似于methods
  // Vuex的store状态更新的唯一方式： 提交mutations
  // mutation主要包括两部分：
  // 1.字符串的事件类型(type)
  // 2.一个回调函数(handler)，该回调函数的第一个参数就是state
  // 在mutations中最好不要进行异步操作，否则会造成devtools无法追踪异步操作后变量的变化
  // 如果确实需要异步操作，用action来代替mutations做异步操作
  mutations,
  // 类似于mutations，但是是用来代替mutations进行异步操作
  // actions: {
  //   aUpdateInfo(context,payload) {
  //     setTimeout(() => {
  //       context.commit('updateInfo')
  //       console.log(payload.message);
  //       console.log(payload.success());
  //     },1000)
  //   }
  // },
  // 更优雅的方式
  actions,
  // 类似于计算属性computed
  getters,
  // module是模块的意思
  // Vue使用单一状态树，那么也意味着很多状态都会交给Vuex来管理
  // 当应用变得非常复杂时，store对象就有可能变得相当臃肿
  // 为了解决这个问题，Vuex允许我们将store分割成模块，而每个模块拥有自己的state,mutations,actions.getters等
  modules: {
    a: moduleA
  }
})

// 3.导出store
export default store
