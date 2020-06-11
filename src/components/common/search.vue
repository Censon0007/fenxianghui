<template>
  <div class="search">
    <div class="search-icon back-repeat"></div>
    <div>请输入你要搜索的内容</div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .search {
    width: 286px;
    height: 30px;
    background: #F5F5F5;
    border-radius: 20px;
    display: flex;
    align-items: center;
    color: #999;
    line-height: 18px;
    font-size: 14px;
    .search-icon {
      width: 14px;
      height: 14px;
      margin: 0 6px 0 12px;
      background-image: url("../../assets/images/Icon_sousuo.png");
    }
  }
</style>
