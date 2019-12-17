import {debounce} from "common/utils";
import BackTop from 'components/content/backTop/BackTop'

export const itemListennerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 1.监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh,100)

    // 对监听的事件进行保存
    this.itemImgListener = () => {
      // this.$refs.scroll.refresh()
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      // scrollTo(x,y,[跳转到坐标的时间ms])
      this.$refs.scroll.scrollTo(0,0,500)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000
      // console.log(this.isShowBackTop);
    }
  }
}
