<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <div class="content">
      <tab-menu :categories="categories"/>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabMenu from './childComps/TabMenu'

  import {getCategory} from "network/category";

  export default {
    name: "Category",
    components: {
      NavBar,
      TabMenu
    },
    data() {
      return {
        categories: []
      }
    },
    created() {
      // 请求分类数据
      getCategory().then(res => {
        // 获取分类数据
        this.categories = res.data.category.list
        console.log(this.categories);
      })
    },
    methods: {

    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
