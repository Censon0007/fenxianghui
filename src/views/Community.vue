<template>
  <page pageName="community">
    <div class="community-head">
      <div class="community-head-top">
        <Search/>
        <head-pic/>
      </div>
      <div class="community-head-nav">
        <cube-scrll 
        
        >
          <div>
            <div class="community-head-nav-item" v-for="(item, index) of headNavList" :key="index">{{item.txt}}</div>
          </div>
        </cube-scrll>
      </div>
    </div>
  </page>
</template>

<script>
import Page from '@/components/Page.vue'
import Search from '@/components/search.vue'
import headPic from '@/components/head-pic.vue'

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
        line-height: 20px;
        font-size: 14px;
        color: #666;
        text-align: center;
        .community-head-nav-item {
          width: 25%;
          height: 100%;
          position: relative;
          &.selected {
            font-weight: 600;
            color: #000;
            &::after {
              content: '';
              position: absolute;
              top: 100%;
              left: 50%;
              width: 28px;
              height: 2px;
              background: linear-gradient(#FFDF6F, #FF7A38);
            }
          }
        }
      }
    }
  }
</style>