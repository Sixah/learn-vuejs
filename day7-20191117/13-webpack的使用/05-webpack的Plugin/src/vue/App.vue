<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <h2>{{name}}</h2>
        <Cpn/>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue'
  export default {
    name: "App",
      data() {
        return {
            message: '大哥，你的盔甲真的没有我的好看',
            name: '吕小布'
        }

      },
      components: {
        Cpn
      },
      methods: {
          btnClick() {
              document.writeln('<span>吕小布在此</span>')
          }
      }
  }
</script>

<style scoped>
    .title {
        color: green;
    }
</style>
