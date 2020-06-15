<template>
    <page pageName="search">
        <div class="search-head bottom-border-1px">
            <div class="search-main">
                <img class="search-subs" src="../../assets/images/Icon_sousuo.png" alt="">
                <input class="search-search" ref="search" v-model="searchCode" @focus="search"/>
                <img class="search-empty" src="../../assets/images/Icon_close.png" alt="">
            </div>
            <div class="search-cancel">取消</div>
        </div>
        <div class="search-result">
            <div class="search-products" v-if="productList.length">
                <waterfall :col="2" :data="productList">
                    <template v-for="(item, index) of productList">
                        <div class="community-dynamic" :key="index">
                            <div class="community-dynamic-container">
                                <img v-if="item.img" :src="item.img" alt=""/>
                                <div class="community-dynamic-detail">
                                    <div class="community-dynamic-desc two-text-ellipsis">{{item.desc}}</div>
                                    <div class="community-dynamic-author">
                                        <head-pic class="author-head" :size="16" :picUrl="item.head"></head-pic>
                                        <div class="author-name ellipsis">{{item.name}}</div>
                                        <div class="author-love back-repeat"></div>
                                        <div class="author-zan">{{item.count}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </waterfall>
            </div>
            <nothing class="search-nothing" v-else :nothingData="nothingData"></nothing>
        </div>
        <div class="search-history" v-if="showHistory">
            <div class="search-history-head">
                <span>历史记录</span>
                <img src="../../assets/images/icon_strike.png" alt="">
            </div>
            <div class="search-history-main" v-if="searchHistory">
                <button class="search-history-item ellipsis" v-for="(item, index) in searchHistory" :key="index">{{item}}</button>
            </div>
        </div>
    </page>
</template>

<script>
    import nothing from '../../components/common/nothing'
    import a from "../../assets/images/icon_weiguanzhu.png";
    export default {
        name: "search",
        data() {
            return {
                searchCode: '',
                showHistory: false,
                nothingData: {
                    word: '没有找到你要的内容，换个关键词试试吧~',
                    imgUrl: a,
                },
                searchHistory: ['美妆', '美食', '最长的哈最长的哈最长的哈最长的哈最长的哈', '很长很长'],
                productList: [{
                    img: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                    head: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg  ',
                    desc: '标题最长字段标题最长',
                    name: '标题最长字段标题最长字段标题最长字段',
                    count: 301,
                    status: '已采纳'
                }]
            }
        },
        components: {
            nothing
        },
        methods: {
            search() {
                console.log('focus')
            }
        }
    }
</script>

<style scoped lang="scss">
    .search {
        background-color: #fff;
        overflow: hidden;
    }

    .search-head {
        display: flex;
        align-items: center;
        height: 50px;
        width: 100%;
        position: relative;

        .search-main {
            display: flex;
            align-items: center;
            width: 300px;
            height: 30px;
            background: rgb(245, 245, 245);
            border-radius: 30px;
            margin-left: 20px;

            .search-subs {
                margin-left: 12px;
                margin-right: 6px;
            }

            .search-search {
                flex: 1;
                caret-color: #FDA156;
            }

            .search-empty{
                margin-right: 12px;
            }
        }
        .search-cancel{
            font-size: 15px;
            color: #000000;
            margin-left: 10px;
        }
    }

    .search-result{
        position: absolute;
        top: 50px;
        right: 0;
        left: 0;
        bottom: 0;
        padding: 10px 10px 0;
        box-sizing: border-box;
        overflow-y: scroll;
        .community-dynamic {
            width: 172px;
            overflow: hidden;
            padding: 0 0px 10px;

            .community-dynamic-container {
                width: 100%;
                border-radius: 6px;
                background-color: #fff;
                box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.06);
                min-height: 100px;
                position: relative;

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

                        .author-head {
                            width: 16px;
                            margin-right: 4px;
                        }

                        .author-name {
                            width: 86px;
                            margin-right: 6px;
                        }

                        .author-love {
                            width: 16px;
                            height: 16px;
                            background-image: url("../../assets/images/aixin.png");
                            margin-right: 4px;
                        }

                        .author-zan {
                            width: 28px;
                        }
                    }
                }
                .community-dynamic-subs{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 54px;
                    height: 20px;
                    border-radius: 6px 0px 9px 0px;
                    background: rgba(0,0,0,0.50);
                    color: #fff;
                    font-size: 12px;
                }
            }
        }
        .search-nothing{
            top: 144px;
        }
    }
    .search-history{
        position: absolute;
        top: 50px;
        right: 0;
        left: 0;
        bottom: 0;
        padding: 0 15px;
        .search-history-head{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 0;
            span{
                font-size: 15px;
                color: #666666;
            }
        }
        .search-history-main{
            text-align: left;
            .search-history-item{
                max-width: 120px;
                min-width: 80px;
                height: 30px;
                font-size: 13px;
                color: #666666;
                letter-spacing: 0;
                text-align: center;
                border-radius: 30px;
                background-color: #F5F5F5;
                margin-right: 20px;
                margin-bottom: 12px;
                padding: 0 8px;
                box-sizing: border-box;
            }
        }

    }
</style>