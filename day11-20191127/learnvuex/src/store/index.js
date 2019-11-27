import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  // 保存数据，数据的状态是响应式的
  // 单一数据源，建议只创建一个store对象
  // 数据属性必须是提前初始化好的
  // 这些数据属性都会被加入到响应式系统中，响应式系统会监听属性的变化
  // 当属性发生变化时，会通知所有用到该属性的界面刷新，更新数据
  state: {
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
  },
  // 类似于methods
  // Vuex的store状态更新的唯一方式： 提交mutations
  // mutation主要包括两部分：
  // 1.字符串的事件类型(type)
  // 2.一个回调函数(handler)，该回调函数的第一个参数就是state
  mutations: {
    // 方法
    // increment事件类型
    // increment(state){state.counter++} 回调函数
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // incrementCount(state,count) {
    //   state.counter += count
    // },
    incrementCount(state,payload) {
      state.counter += payload.count
    },
    addStudent(state,stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'sixah'
      // 没有初始化的属性，可以添加成功，但不是响应式的
      state.info['address'] = '洛杉矶'
      // Vue.set方法可以把要修改的属性添加到响应式系统中
      Vue.set(state.info,'sex','男')
      // delete关键词删除属性不是响应式的
      delete state.info.age
      // Vue.delete方法可以做到删除属性响应式
      Vue.delete(state.info,'address')
    }
  },
  actions: {

  },
  // 类似于计算属性computed
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 18)
    },
    more20stulength(state,getters) {
      return getters.more20stu.length
    },
    moreAgestu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }

      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {

  }
})

// 3.导出store
export default store
