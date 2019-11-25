<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="#d4237a">
      <img slot="item-icon" src="~assets/img/tabbar/home-fill.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-fill1.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="#d4237a">
      <img slot="item-icon" src="~assets/img/tabbar/all-fill.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/all-fill1.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="#d4237a">
      <img slot="item-icon" src="~assets/img/tabbar/cart-full-fill.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart-full-fill1.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="#d4237a">
      <img slot="item-icon" src="~assets/img/tabbar/account.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/account1.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar'
  import TabBarItem from 'components/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
