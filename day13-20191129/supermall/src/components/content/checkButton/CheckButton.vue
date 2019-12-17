<template>
  <div class="check-button" @click="BtnClick">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      BtnClick() {
        this.$emit('checkBtnClick')
      }
    }
  }
</script>

<style scoped>
  .check-button {

  }
</style>
