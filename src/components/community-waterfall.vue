<template>
  <vue-waterfall-easy
      class="community-waterfall-container"
      :maxCols="waterfallCol"
      :imgsArr="waterfallData"
      :mobileGap="0"
      cardAnimationClass=""
      @scrollReachBottom="onWaterfall"
      :reachBottomDistance="50"
    >
      <div class="community-dynamic-none" v-if="!waterfallData.length">
        <div class="community-dynamic-none-icon"></div>
        <div class="community-dynamic-none-txt">暂无动态~</div>
        <div class="community-dynamic-none-btn">发布动态</div>
      </div>
      <div class="community-dynamic" slot-scope="props">
        <div class="community-dynamic-container">
          <img v-if="props.value.img" :src="props.value.src" alt=""/>
          <div class="community-dynamic-detail">
            <div class="community-dynamic-desc two-text-ellipsis">{{props.value.desc}}</div>
            <div class="community-dynamic-author">
              <head-pic class="author-head" :size="16" :picUrl="props.value.head"></head-pic>
              <div class="author-name ellipsis">{{props.value.name}}</div>
              <div class="author-love"></div>
              <div class="author-zan">{{props.value.count}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div slot="loading" slot-scope="{isFirstLoad}">
  <div slot="loading" v-if="isFirstLoad">first-loading...</div>
  <div v-else="v-else">loading...</div>
</div> -->
      <div class="community-dynamic-loading" slot="loading">
        <div class="loaing-detail" v-if="hasMoreDynamic">
          <div class="loaing-icon"></div>
          <div class="loaing-txt">火速加载中，请耐心等候…</div>
        </div>
      </div>
      <div class="loaing-detail" slot="waterfall-over">
        <div class="loaing-txt">已经到底啦 <span class="toTop">返回顶部</span></div>
      </div>
  </vue-waterfall-easy>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'

export default {
  name: 'community-waterfall',
  components: {
    vueWaterfallEasy
  },
  props: {
    waterfallCol: {
      type: Number,
      default: 2
    },
    waterfallData: {
      type: Array,
      default: () => []
    },
    onWaterfallLoadMore: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      options: {
        observeDOM: true,
        scrollY: true,
        click: true,
        probeType: 2,
        pullUpLoad: true,
        stopPropagation: true
      },
      isShowLoadingMore: false,
      loadMoreTxt: '火速加载中，请耐心等候…',
      hasMoreDynamic: true
    }
  },
  methods: {
    onWaterfall() {
      this.isShowLoadingMore = !this.isShowLoadingMore
      this.hasMoreDynamic && setTimeout(() => {
        this.hasMoreDynamic = false
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-waterfall-easy-container .vue-waterfall-easy > .img-box {
      border-radius: 6px !important;
      background-color: #fff;
      box-shadow: 0 4px 10px 0 rgba(0,0,0,0.06);
      padding: 0 5px 10px !important;
    }
  .community-waterfall-container {
    .community-dynamic {
      width: 100%;
      overflow: hidden;
      .community-dynamic-container {
        width: 100%;
        border-radius: 6px;
        background-color: #fff;
        box-shadow: 0 4px 10px 0 rgba(0,0,0,0.06);
        min-height: 80px;
        img {
          display: block;
          width: 100%;
          border-radius: 6px 6px 0 0;
        }
        .community-dynamic-detail {
          padding: 10px;
          .community-dynamic-desc {
            width: 100%;
            line-height: 20px;
            text-align: left;
            font-size: 14px;
            color: #333;
            font-weight: 600;
            margin-bottom: 12px;
          }
          .community-dynamic-author {
            display: flex;
            align-items: center;
            height: 18px;
            line-height: 18px;
            font-size: 12px;
            color: #666;
            margin-bottom: 12px;
            .author-head {
              width: 16px;
              margin-right: 4px;
            }
            .author-name {
              width: 86px;
              margin-right: 6px;
            }
            .author-love {
              width: 12px;
              height: 12px;
              background-color: aquamarine;
              margin-right: 4px;
            }
            .author-zan {
              width: 28px;
            }
          }
        }
      }
    }
    .community-dynamic-none {
      position: absolute;
      left: 0;
      top: 128px;
      width: 100%;
      .community-dynamic-none-icon {
        width: 72px;
        height: 63px;
        background-color: #FF4D36;
        margin: 0 auto 10px;
      }
      .community-dynamic-none-txt {
        font-size: 14px;
        color: #999999;
        margin-bottom: 20px;
      }
      .community-dynamic-none-btn {
        width: 100px;
        height: 32px;
        line-height: 32px;
        border: 1px solid #FF693B;
        border-radius: 16px;
        margin: 0 auto;
        color: #FF693B;
      }
    }
    .community-dynamic-loading {
      // position: absolute;
      // z-index: 1;
      // left: 0;
      // bottom: 0;
      width: 100%;
      height: 30px;
      font-size: 12px;
      line-height: 24px;
      color: #999;
      /* background-color: #F2F2F2; */
      display: flex;
      justify-content: center;
      .loaing-detail {
        height: 24px;
        display: flex;
        justify-content: center;
        position: relative;
        .loaing-icon {
          position: absolute;
          left: -20px;
          top: 0;
          width: 18px;
          height: 18px;
          background-color: #FF7A38;
        }
        .loaing-txt {
          .toTop {
            color: #ff693b;
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
