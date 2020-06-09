<template>
  <div class="head-pic">
    <img :src="picUrl" alt="" />
  </div>
</template>

<script>
export default {
  name: 'head-pic',
  props: {
    size: {
      type: [Number, String],
      default: 32
    },
    picUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .head-pic {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid transparent;
    background-color: aqua;
  }
</style>
