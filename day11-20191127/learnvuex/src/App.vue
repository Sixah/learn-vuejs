<template>
  <div id="app">
    <h2>------App内容：modules中内容------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
    <h2>-----APP组件内容-----</h2>
    <h3>{{$store.state.counter}}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h2>----info信息</h2>
    <h3>{{$store.state.info}}</h3>
    <button @click="updateInfo">修改信息</button>

    <h2>------App内容:getters相关信息-----</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <!--<h2>{{more20stu}}</h2>-->
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.moreAgestu(17)}}</h2>
    <!--<hello-vuex :counter="counter"></hello-vuex>-->
    <h2>-----Hello Vuex组件内容-----</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import {
    INCREMENT
  } from './store/mutations-types'
export default {
  name: 'App',
  data() {
    return {
      // counter: 0
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      // this.$store.commit('increment')
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 在通过mutation更新数据的时候，有时候我们希望携带一些额外的参数
      // 参数被称为mutation的载荷(payload)
      // 如果有多个参数，可以通过一个对象参数传递

      // 1.普通的参数提交方式
      // this.$store.commit('incrementCount',count)

      // 2.特殊的参数提交方式
      this.$store.commit({
        type: 'incrementCount',
        count: count
      })
    },
    addStudent() {
      const su = {id:114,name:"alan",age:23}
      this.$store.commit('addStudent',su)
    },
    updateInfo() {
      // 调用mutations
      // this.$store.commit('updateInfo')

      // 调用actions
      // 可以传递字符串参数
      // this.$store.dispatch('aUpdateInfo','我是payload')
      // 也可以是复杂的对象
      // this.$store.dispatch('aUpdateInfo',{
      //   message:"我是携带的信息",
      //   success: () => {
      //     console.log('工作完成了');
      //   }
      // })
      // 更优雅的方式
      this.$store.dispatch('aUpdateInfo','我是携带的信息').then(
        res => {
          console.log('工作完成了');
          console.log(res);
        }
      )
    },
    updateName() {
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  },
  computed: {
    // more20stu() {
    //   return this.$store.state.students.filter(s => s.age > 18)
    // }
  }
}
</script>

<style>

</style>
