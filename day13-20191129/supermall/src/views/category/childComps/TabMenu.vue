<template>
  <scroll class="tab-menu">
    <div v-if="categories.length !== 0" class="menu-list">
      <div v-for="{item,index} in categories" :key="index" class="menu-list-item">
        {{item}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "TabMenu",
    components: {
      Scroll
    },
    props: {
      categories: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    mounted() {
      console.log(this.categories);
    },
    methods: {

    },
    watch: {
      categories(newValue,oldValue) {
        if (newValue !== oldValue) {
          this.categories = newValue
          console.log(this.categories);
        }
      }
    }
  }
</script>

<style scoped>
  .tab-menu {
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
  }

  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
</style>
