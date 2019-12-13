import {debounce} from "common/utils";

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
