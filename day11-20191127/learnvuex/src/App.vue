<template>
  <div id="app">
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
      this.$store.commit('increment')
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
      this.$store.commit('updateInfo')
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
