<template>
  <div class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      message: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: true
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
  }
</style>
