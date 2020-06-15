<template>
    <div class="interactive-content">
        <cube-scroll
                ref="scroll"
                :data="product"
                direction="horizontal"
                class="horizontal-scroll-list-wrap">
            <ul class="list-wrapper">
                <li class="interactive-product" v-for="(item, index) in product" :key="index">
                    <img class="interactive-image" :src="item.img" alt="">
                    <p class="interactive-introduction">{{item.introduction}}</p>
                    <div class="interactive-details">
                        <img class="interactive-avatar" :src="item.avatar" alt="">
                        <span class="interactive-nickname">{{item.nickname}}</span>
                        <div class="interactive-loving">
                            <img class="interactive-lover" src="../../assets/images/aixin.png">
                            <span class="interactive-sum">{{item.sum}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </cube-scroll>
        <div class="interactive-more" @click="goToCommunity">
            <span>更多&gt;</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                product: [
                    {
                        img: 'http://file02.16sucai.com/d/file/2014/0829/b871e1addf5f8e96f3b390ece2b2da0d.jpg',
                        introduction: '身高是个发哦is会发生发生',
                        nickname: '啊啊啊啊啊啊啊啊啊',
                        sum: '1333',
                        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591699914868&di=fef4bbfbdeb28dc6abb2e25eea4fe128&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121170148_im8UV.jpeg'
                    },
                    {
                        img: 'http://file02.16sucai.com/d/file/2014/0829/b871e1addf5f8e96f3b390ece2b2da0d.jpg',
                        introduction: '杀王师傅环球网IE共和股黑色',
                        nickname: '凄凄切切群群',
                        sum: '1222',
                        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591699914868&di=fef4bbfbdeb28dc6abb2e25eea4fe128&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121170148_im8UV.jpeg'
                    },
                    {
                        img: 'http://file02.16sucai.com/d/file/2014/0829/b871e1addf5f8e96f3b390ece2b2da0d.jpg',
                        introduction: '收到该发生咖啡吧水房爱对方卜贵士大夫撒干啥',
                        nickname: '呃呃呃呃呃呃呃',
                        sum: '1222',
                        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591699914868&di=fef4bbfbdeb28dc6abb2e25eea4fe128&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121170148_im8UV.jpeg'
                    }
                ]
            }
        },
        methods: {
            goToCommunity() {
                this.$router.replace('/community')
            }
        }
    }
</script>

<style lang="scss">
    .interactive-content{
        position: relative;
        .horizontal-scroll-list-wrap {
            width: 100%;
            height: 267px;
            background-image: url("../../assets/images/Bg_home.png");
            background-size: 100%;
            background-repeat: no-repeat;
            background-color: rgb(250,250,250);
            box-sizing: border-box;
            padding: 50px 0 15px;
            position: relative;
            overflow: hidden;
            .cube-scroll-content{
                display: inline-block
            }
            .list-wrapper{
                padding: 0 10px;
                display: flex;
                .interactive-product{
                    width: 150px;
                    height: 205px;
                    background-color: #fff;
                    border-radius: 4px;
                    overflow: hidden;
                    margin-right: 10px;
                    &:last-child{
                        margin-right: 0;
                    }
                    .interactive-image{
                        width: 100%;
                        height: 120px;
                        display: block;
                    }
                    .interactive-introduction{
                        text-align: left;
                        width: 100%;
                        line-height: 20px;
                        box-sizing: border-box;
                        font-weight: 700;
                        padding: 0 8px;
                        font-size: 14px;
                        margin: 10px 0;
                        white-space: normal;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    .interactive-details{
                        width: 100%;
                        box-sizing: border-box;
                        padding: 0 8px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .interactive-avatar{
                            width: 16px;
                            height: 16px;
                            display: block;
                            border-radius: 50%;
                        }
                        .interactive-nickname{
                            font-size: 12px;
                            color: #666;
                            width: 60px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            word-break: break-all;
                        }
                        .interactive-loving{
                            display: flex;
                            align-items: center;
                            .interactive-lover{
                                width: 16px;
                                height: 16px;
                                display: block;
                            }
                            .interactive-sum{
                                display: block;
                                width: 30px;
                                font-size: 12px;
                                color: #999;
                            }
                        }
                    }
                }
            }

        }
        .interactive-more{
            position: absolute;
            font-size: 12px;
            color: #999;
            top: 18px;
            right: 10px;
        }
    }
</style>