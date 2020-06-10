<template>
  <scroll-wrap ref="scroll" class="community-waterfall" :onPullingUp="onWaterfallLoadMore" :options="options">
    <waterfall class="community-waterfall-container" :col="waterfallCol" :data="waterfallData" @finish="finish">
      <template v-for="(item, index) of waterfallData">
        <div class="community-dynamic" :key="index">
          <div class="community-dynamic-container">
            <img v-if="item.img" :lazy-src="item.img" alt=""/>
            <div class="community-dynamic-detail">
              <div class="community-dynamic-desc two-text-ellipsis">{{item.desc}}</div>
              <div class="community-dynamic-author">
                <head-pic class="author-head" :size="16" :picUrl="item.head"></head-pic>
                <div class="author-name ellipsis">{{item.name}}</div>
                <div class="author-love"></div>
                <div class="author-zan">{{item.count}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
  </scroll-wrap>
</template>

<script>
export default {
  name: 'community-waterfall',
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
      }
    }
  },
  methods: {
    finish() {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
  }
}
</script>

<style lang="scss">
  .community-waterfall {
    width: 100%;
    height: 100%;
    position: relative;
    .community-waterfall-container {
      padding-bottom: 30px;
      .community-dynamic {
        width: 100%;
        overflow: hidden;
        padding: 0 5px 10px;
        .community-dynamic-container {
          width: 100%;
          border-radius: 6px;
          background-color: #fff;
          box-shadow: 0 4px 10px 0 rgba(0,0,0,0.06);
          min-height: 100px;
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
    }
  }
  .cube-pullup-wrapper {
    display: none !important;
  }
</style>
