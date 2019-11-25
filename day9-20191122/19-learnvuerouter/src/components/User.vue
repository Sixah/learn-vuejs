<template>
  <div>
    <h1>你好，{{userId}}</h1>
    <h2>我是用户界面</h2>
    <p>我是用户的界面呦</p>
    <h1>{{$route.params.id}}</h1>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        // $route.params 存放了动态路由中的参数
        // 哪个组件是active状态，获取的就是那个组件的动态路由参数
        return this.$route.params.id
      }
    },
    methods: {
      btnClick() {
        // 所有的组件都继承自Vue类的原型
        console.log(this.$router);
        console.log(this.route);
        console.log(this.test())
      }
    },
    // created() {
    //   console.log('created');
    //   document.title = '用户'
    // },
  }
</script>

<style scoped>

</style>

