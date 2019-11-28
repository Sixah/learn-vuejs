import {INCREMENT} from "./mutations-types";

export default {
  // 方法
  // increment事件类型
  // increment(state){state.counter++} 回调函数
  // increment(state) {
  //   state.counter++
  // },
  [INCREMENT](state) {
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

    // 错误代码： 不能在这里进行异步操作
    // setTimeout(() => {
    //   state.info.name = 'vue'
    // },1000)
  }
}
