<template>
  <div>
    <h2>我是首页</h2>
    <p>我是内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: '你好啊'
      }
    },
    // 创建页面时回调
    created() {
      console.log('created');
      // document.title = '首页'
    },
    // 挂载页面到dom时回调
    mounted() {
      console.log('mounted');
    },
    // 页面刷新回调
    updated() {
      console.log('updated');
    },
    // 页面销毁前回调
    destroyed() {
      console.log('destroyed');
    },
    // 页面活跃时回调
    // 只有该组件被保持了状态使用了keep-alive时，才有效
    activated() {
      this.$router.push(this.path)
    },
    // 页面不活跃时回调
    // 只有该组件被保持了状态使用了keep-alive时，才有效
    deactivated() {
    },
    // 组件守卫 离开页面前回调
    beforeRouteLeave(to,from,next) {
      this.path = this.$route.path
      next()
    },
  }
</script>

<style scoped>

</style>
