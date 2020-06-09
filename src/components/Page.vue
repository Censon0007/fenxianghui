<template>
  <div class="page" :class="pageName">
    <div class="page-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: {
    pageName: {
      type:String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .scroll-viewer {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .scroll-viewer::-webkit-scrollbar {
    display: none;
  }
  .page {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .page-container {
      width: 100%;
      height: 100%;
      position: relative;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      &>.scroll-viewer {
        flex: 1;
        position: relative;
        left: 0;
        top: 0;
      }
    }
  }
</style>
