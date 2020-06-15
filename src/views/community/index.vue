<template>
  <page pageName="community">
    <div class="community-head">
      <div class="community-head-top">
        <Search @search="search"/>
        <head-pic/>
      </div>
      <div class="community-head-nav">
        <scroll-wrap
          ref="scroll"
          direction="horizontal"
          class="community-head-nav-scroll"
          :options="options"
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
        </scroll-wrap>
      </div>
    </div>
    <div class="community-dynamic-list">
      <community-waterfall
        class="community-dynamic-waterfall"
        v-if="waterfallData.length"
        :waterfallData="waterfallData"
      >
      </community-waterfall>
    </div>
    <div class=""></div>
    <div class="community-dynamic-release" v-if="waterfallData.length"></div>
    <div class="community-bottom top-border-1px"></div>
  </page>
</template>

<script>
import Search from '@/components/common/search.vue'
import communityWaterfall from '@/components/community-waterfall.vue'
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
      options: {
        scrollX: true,
        bounce: false
      },
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
          txt: '关注的标题最长字段标题'
        },
      ],
      waterfallData: [
        {
          src: topicPic,
          head: topicPic,
          desc: '标题最长字段标题最长',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 301
        },
        {
          src: topicPic,
          head: topicPic,
          desc: '标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 302
        },
        {
          src: topicPic,
          head: topicPic,
          desc: '标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 303
        },
        {
          src: topicPic,
          head: topicPic,
          desc: '标题最长字段标题',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 304
        },
        {
          src: topicPic,
          head: topicPic,
          desc: '标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段标题最长字段',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 305
        },
        {
          src: topicPic,
          head: topicPic,
          desc: '标题最长字段标题',
          name: '标题最长字段标题最长字段标题最长字段',
          count: 306
        },
      ],
    }
  },
  methods: {
    search() {
      this.$router.push('/search')
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
          width: 100%;
          height: 40px;
          position: relative;
          .cube-scroll-content{
            display: inline-block !important;
          }
          .community-head-nav-wrap {
            white-space: nowrap;
            .community-head-nav-item {
              display: inline-block;
              min-width: 72px;
              padding: 0 20px 0 24px;
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
    .community-bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 49px;
      // background-color: #FF7A38;
    }
  }
</style>