<template>
  <page pageName="dynamic-detail">
    <div class="dynamic-detail-top"></div>
    <div class="dynamic-detail-content"></div>
    <div class="dynamic-detail-bottom"></div>
  </page>
</template>

<script>
export default {
  name: 'dynamic-detail',
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
  .dynamic-detail {
    background-color: #fff;
    .dynamic-detail-top {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 66px;
    }
    .dynamic-detail-content {
      position: absolute;
      left: 0;
      top: 66px;
      bottom: 50px;
      right: 0;
      margin: auto;
    }
    .dynamic-detail-bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 50px;
    }
  }
</style>
