<template>
  <div id="app">
    <!-- router-link：
     该标签是一个vue-router中已经内置的组件，它默认会被渲染成一个<a>标签
     to属性指定跳转的路由
     tag属性可以指定渲染的标签
     replace属性可以禁止页面返回
     默认使用的是pushState方式改变的url.类似于入栈和出栈操作，可以返回
     replace属性启用replaceState方式改变url
     -->

    <!--
      <router-link to="/home" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
     -->

    <!--
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    -->

    <!--
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 动态路由的绑定，需要使用v-bind -->
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/profile',query: {name:'sixah',age:18,height:178}}">档案</router-link>

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <h1>你真好看！</h1>
    <!-- router-view
     该标签会根据当前的路径，动态渲染出不同的组件
     -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <h1>Sixah</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 198
        }
      })
    }
  }
}
</script>

<style>
  /*.router-link-active {*/
    /*color: red;*/
  /*}*/

  .active {
    color: #f00;
  }
</style>
