<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <cart-list class="cart-list"/>

    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      // 第一种语法
      // ...mapGetters(['cartLength']),

      // 第二种语法(可以自定义变量名)
        ...mapGetters({
          length: 'cartLength'
        })
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
    /*overflow: hidden;*/
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 98px;
    width: 100%;
  }
</style>
