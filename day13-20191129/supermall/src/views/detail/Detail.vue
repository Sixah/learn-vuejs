<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imgLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "network/detail";
  import {itemListennerMixin,backTopMixin} from "common/mixin";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList
    },
    // 代码混入
    mixins: [itemListennerMixin,backTopMixin],
    data() {
      return {
        iid: '',
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: []
      }
    },
    methods: {
      imgLoad() {
        this.$refs.scroll.refresh()

        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index]+44,100)
      },
      contentScroll(position) {
        // 是否显示回到顶部按钮
        this.listenShowBackTop(position)

        // 1.获取y值
        const positionY = -position.y

        // psitionY和主题中值对比
        // [0, 7938, 9120, 9452, Number,MAX_VALUE]

        // positionY 在 >=0 到 <7938 之间， index = 0
        // positionY 在 >=7938 到 <9120 之间， index = 1
        // positionY 在 >=9120 到 <9452 之间， index = 2
        // positionY 在 >=9452 到 <Number.MAX_VALUE 之间， index = 3
        let length = this.themeTopYs.length

        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && ((positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]))) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

/*        for (let i = 0; i < length; i++) {
          if (this.currentIndex !== i && ((positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])
            || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }*/
      },
      addToCart() {
        // 1.获取购物车需要展示的信息
        const product = {}
        product.id = this.iid
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        // 2.将商品添加到购物车
        this.$store.dispatch('addCart',product)
      }
    },
    created() {
      // 获取iid
      this.iid = this.$route.params.id

      // 获取详情页数据
      getDetail(this.iid).then(res => {
        console.log(res);
        // 1.获取顶部的图片轮播数据
        const data = res.result
        this.topImages = data.itemInfo.topImages

        // 2 获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        console.log(this.goods);

        // 3.获取商铺信息
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo

        // 5.获取详情参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        // 6.获取评价信息
        if (data.rate.list.length !== 0) {
          this.commentInfo = data.rate.list[0]
        }

/*        this.$nextTick(() => {
          // 根据最新的数据，对应的DOM是已经被渲染出来的
          // 但是图片依然是没有加载完（目前获取到offsetTop不包含其中图片的高度）
          // offsetTop值不对的时候，一般都是图片的问题
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        })*/
      })

      // 获取推荐数据
      getRecommend().then(res => {
          this.recommends = res.data.list
        })
    },
    mounted() {
    },
    destroyed() {
      this.$bus.$off('itemImagLoad', this.itemImgListener)
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 55px);
    overflow: hidden;
  }
</style>
