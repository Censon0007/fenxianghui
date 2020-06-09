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
  </page>
</template>

<script>
import Page from '@/components/common/Page.vue'
import Search from '@/components/common/search.vue'
import headPic from '@/components/common/head-pic.vue'

export default {
  name: 'Community',
  components: {
    Search,
    headPic,
    Page
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
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .community {
    .community-head {
      width: 100%;
      height: 80px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 10px 0;
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
                    transform: translateX(-50%);
                    border-radius: 2px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>