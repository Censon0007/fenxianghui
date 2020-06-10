<template>
  <div class="head-pic" :style="setStyle">
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
  },
  computed: {
    setStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .head-pic {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: aqua;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
