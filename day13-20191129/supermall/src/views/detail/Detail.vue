<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar
    },
    data() {
      return {
        iid: null
      }
    },
    computed: {
      getGoodsId() {
        return this.$route.params.id
      }
    },
    created() {
      // this.iid = this.$route.params.id

    },
    activated() {
      this.iid = this.$route.params.id
      getDetail(this.iid).then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>
