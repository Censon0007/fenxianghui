<template>
  <page pageName="dynamic-detail">
    <div class="dynamic-detail-top">
      <head-pic class="author-pic" :size="36" />
      <div class="author-name ellipsis\">一颗薏米</div>
      <div class="author-btn-attention" :class="{'followed': hasAttention}">
        <div v-if="hasAttention"><span class="add-attention">十</span>关注</div>
        <div v-else>已关注</div>
      </div>
      <div class="author-btn-share back-repeat"></div>
    </div>
    <div class="dynamic-detail-content"></div>
    <div class="dynamic-detail-bottom top-border-1px"></div>
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
  data() {
    return {
      hasAttention: true
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
      display: flex;
      align-items: center;
      font-size: 16px;
      .author-pic {
        flex-shrink: 0;
        margin: 0 9px 0 18px;
      }
      .author-name {
        flex: 1;
        color: #333333;
        text-align: left;
        font-weight: 600;
      }
      .author-btn-attention {
        flex-shrink: 0;
        width: 80px;
        height: 32px;
        border: 0.5px solid #999;
        border-radius: 16px;
        box-sizing: border-box;
        line-height: 32px;
        color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 25px 0 10px;
        .add-attention {
          margin-right: 5px;
        }
        &.followed {
          border-color: #FF693B;
          color: #FF693B;
        }
      }
      .author-btn-share {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        background: #333333;
        margin-right: 20px;
      }
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
