<template>
  <page pageName="community">
    <div class="community-head">
      <div class="community-head-top">
        <Search/>
        <head-pic/>
      </div>
      <div class="community-head-nav">
        <cube-scroll
        ref="scroll"
          class="community-head-nav-scroll"
          direction="horizontal"
          :data="headNavList"
        >
          <div class="community-head-nav-wrap">
            <div
              class="community-head-nav-item"
              v-for="(item, index) of headNavList"
              :key="index"
            >
              <div class="community-head-nav-item-txt" :class="{ 'selected': navIndex === index }">{{item.txt}}</div>
            </div>
          </div>
        </cube-scroll>
      </div>
    </div>
    <div class="community-dynamic-list">
      <community-waterfall
        class="community-dynamic-waterfall"
        v-if="waterfallData.length"
        :waterfallData="waterfallData"
        :onWaterfallLoadMore="onWaterfallLoadMore"
      >
      </community-waterfall>
      <div class="community-dynamic-none" v-else>
        <div class="community-dynamic-none-icon"></div>
        <div class="community-dynamic-none-txt">暂无动态~</div>
        <div class="community-dynamic-none-btn">发布动态</div>
      </div>
      <div class="community-dynamic-loading" v-show="isShowLoadingMore">
        <div class="loaing-detail" v-if="hasMoreDynamic">
          <div class="loaing-icon"></div>
          <div class="loaing-txt">{{loadMoreTxt}}</div>
        </div>
        <div class="loaing-detail" v-else>
          <div class="loaing-txt">已经到底啦 <span class="toTop">返回顶部</span></div>
        </div>
      </div>
    </div>
    <div class=""></div>
    <div class="community-dynamic-release" v-if="waterfallData.length"></div>
  </page>
</template>

<script>
import Search from '@/components/common/search.vue'
import communityWaterfall from '@/components/common/community-waterfall.vue'
import topicPic from '@/assets/images/c.png'

export default {
  name: 'Community',
  components: {
    Search,
    communityWaterfall
  },
  data() {
    return {
      navIndex: 0,
      headNavList: [
        {
          txt: '全部'
        },
        {
          txt: '养生'
        },
        {
          txt: '美妆'
        },
        {
          txt: '旅游'
        },
        {
          txt: '关注的'
        },
      ],
      waterfallData: [
        {
          img: topicPic,
          head: topicPic,
          desc: '标题最长字段标题最长',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 301
        },
        {
          img: topicPic,
          head: topicPic,
          desc: '标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 302
        },
        {
          img: topicPic,
          head: topicPic,
          desc: '标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 303
        },
        {
          img: topicPic,
          head: topicPic,
          desc: '标题最长字段标题',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 304
        },
        {
          img: topicPic,
          head: topicPic,
          desc: '标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 305
        },
        {
          img: topicPic,
          head: topicPic,
          desc: '标题最长字段标题',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 306
        },
      ],
      isShowLoadingMore: false,
      loadMoreTxt: '火速加载中，请耐心等候…',
      hasMoreDynamic: true
    }
  },
  methods: {
    onWaterfallLoadMore() {
      this.isShowLoadingMore = !this.isShowLoadingMore
      this.hasMoreDynamic && setTimeout(() => {
        this.hasMoreDynamic = false
      }, 500);
    }
  }
}
</script>

<style lang="scss">
  .community {
    position: relative;
    .community-head {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 10px 0;
      box-shadow: 0 4px 12px 0 rgba(0,0,0,0.06);
      z-index: 10;
      .community-head-top {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
      }
      .community-head-nav {
        width: 100%;
        height: 40px;
        line-height: 38px;
        font-size: 14px;
        color: #666;
        text-align: center;
        overflow: hidden;
        margin-top: 2px;
        .community-head-nav-scroll {
          .community-head-nav-wrap {
            white-space: nowrap;
            .community-head-nav-item {
              display: inline-block;
              width: 20%;
              height: 38px;
              overflow: hidden;
              .community-head-nav-item-txt {
                display: inline-block;
                height: 100%;
                position: relative;
                &.selected {
                  font-weight: 600;
                  color: #000;
                  &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, #FF7A38, #FFDF6F);
                    transform: translateX(-50%) translateZ(1px);
                    border-radius: 2px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .community-dynamic-list {
      position: absolute;
      left: 0;
      top: 80px;
      bottom: 50px;
      right: 0;
      margin: auto;
      padding: 0 5px;
      height: auto;
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
        position: absolute;
        z-index: 1;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        font-size: 12px;
        line-height: 18px;
        color: #999;
        /* background-color: #F2F2F2; */
        display: flex;
        justify-content: center;
        .loaing-detail {
          height: 18px;
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
    .community-dynamic-release {
      position: fixed;
      right: 10px;
      bottom: 85px;
      width: 74px;
      height: 74px;
      border-radius: 50%;
      background-image: url("../../assets/images/Icon_fabu.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      z-index: 10;

    }
  }
</style>