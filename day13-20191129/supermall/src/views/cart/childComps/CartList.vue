<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <div>
        <cart-list-item v-for="(item,index) in cartList" :product="item"/>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'

  import {mapGetters} from 'vuex'
  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters([
        'cartList'
      ])
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    methods: {

    }
  }
</script>

<style scoped>
  .cart-list {
    /*height: 100%;*/
    height: calc(100% - 44px - 49px - 49px);
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
