<template>
  <div class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    // props: {
    //   message: {
    //     type: String,
    //     default: ''
    //   },
    //   show: {
    //     type: Boolean,
    //     default: true
    //   }
    // },
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message,duration=2000) {
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.8);
    z-index: 999;
    font-size: 18px;
    line-height: 30px;
    width: 110px;
  }
</style>
