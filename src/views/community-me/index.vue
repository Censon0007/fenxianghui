<template>
    <page pageName="my-community-contain">
        <div class="my-community-main back-repeat">
            <div class="my-community-personal">
                <div class="my-community-avatar">
                    <img class="my-community-img" src="../../assets/images/avatar.jpg" alt="">
                    <span class="my-community-vip"></span>
                </div>
                <span class="my-community-nickname">什邡市水房</span>
                <span class="my-community-setting back-repeat"></span>
                <div class="my-community-homepage" @click="goToHomepage">社区首页&nbsp;&gt;</div>
            </div>
            <div class="my-community-data">
                <div class="my-community-style">
                    <span class="my-community-top">123</span>
                    <span>获赞数</span>
                </div>
                <div class="my-community-style">
                    <span class="my-community-top">0</span>
                    <span>我的关注&nbsp;&gt;</span>
                </div>
                <div class="my-community-style">
                    <span class="my-community-top">0</span>
                    <span>被收藏</span>
                </div>
            </div>
        </div>
        <div class="my-community-nav">
            <div v-for="(item, index) in tabs" :class="{on: currentIndex === index}" @click.stop="checkIndex(index)" :key="index">{{item}}
                <div v-if="currentIndex === index" class="my-community-sign"></div>
            </div>
        </div>
        <div class="my-community-content" v-if="currentIndex === 0">
            <div class="my-community-dynamic" v-if="waterfallData.length">
                <template v-for="(item, index) of waterfallData">
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
            </div>
            <nothing :nothingData="nothingData" v-else></nothing>
        </div>
        <div class="my-community-content" v-if="currentIndex === 1">

            <nothing :nothingData="nothingData"></nothing>
        </div>
        <div class="my-community-content" v-if="currentIndex === 2">

            <nothing :nothingData="nothingData"></nothing>
        </div>
    </page>
</template>

<script>
    import nothing from '../../components/common/nothing'
    import a from '../../assets/images/Icon_fabuweikong.png'
    import b from '../../assets/images/Icon_pinglunweikong.png'
    import c from '../../assets/images/Icon-shoucangweik.png'

    export default {
        name: "community-me",
        data() {
            return {
                btnWord: '发布动态',
                word: '你还未发布动态哦，去发布一条吧~',
                imgUrl: a,
                tabs: ['我的发布', '我的评论', '我的收藏'],
                currentIndex: 0,
                waterfallData: [],
            }
        },
        components: {
            nothing
        },
        computed: {
            nothingData() {
                let obj = {}
                switch (this.currentIndex) {
                    case 0:
                        obj = {
                            btnWord: '发布动态',
                            word: '你还未发布动态哦，去发布一条吧~',
                            imgUrl: a,
                        }
                        break
                    case 1:
                        obj = {
                            btnWord: '社区首页',
                            word: '你还未收到或发表评论哦~',
                            imgUrl: b,
                        }
                        break
                    case 2:
                        obj = {
                            btnWord: '社区首页',
                            word: '你还未收藏任何动态哦~',
                            imgUrl: c,
                        }
                        break
                    default:
                        break
                }
                return obj
            }
        },
        methods: {
            checkIndex(index) { // 导航切换事件
                this.currentIndex = index
            },
            goToHomepage() { // 地址需换成社区首页地址路由
                this.$router.replace('/homepage')
            },
            http() { // 发送请求
                this.$api.hello({
                    activityId: '1270919190450147328',
                    templateId: '1270919190806663168'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-community-main {
        width: 100%;
        height: 145px;
        background-image: url("../../assets/images/bg.png");
        position: fixed;
        top: 0;
        z-index: 2;

        .my-community-personal {
            padding: 20px 0 18px 22px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .my-community-avatar {
                position: relative;
                width: 36px;
                height: 36px;
                margin-right: 12px;

                .my-community-img {
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                    display: block;
                }

                .my-community-vip {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 16px;
                    height: 16px;
                    background-image: url("../../assets/images/icon_v.png");
                }
            }

            .my-community-nickname {
                font-size: 16px;
                color: #fff;
                margin-right: 10px;
            }

            .my-community-setting {
                width: 36px;
                height: 20px;
                background-image: url("../../assets/images/Icon_xiugai.png");
            }

            .my-community-homepage {
                width: 74px;
                height: 24px;
                line-height: 24px;
                color: #fff;
                background-image: linear-gradient(to right, rgb(255, 78, 54), rgb(255, 114, 56));
                margin-left: auto;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }
        }

        .my-community-data {
            width: 100%;
            padding: 0 26px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .my-community-style {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #fff;
                font-size: 12px;

                .my-community-top {
                    font-size: 16px;
                    margin-bottom: 5px;
                }
            }
        }
    }

    .my-community-nav {
        width: 100%;
        height: 44px;
        padding: 0 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        overflow: hidden;
        position: fixed;
        top: 135px;
        z-index: 3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #666;
        font-size: 14px;

        .on {
            color: #000;
        }

        .my-community-sign {
            position: absolute;
            width: 56px;
            height: 2px;
            bottom: 0;
            background-image: linear-gradient(to right, #FF4D36, #FFDF6F);
        }
    }

    .my-community-content {
        position: fixed;
        top: 180px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px 5px 0;
        box-sizing: border-box;
        overflow: hidden;

        .my-community-dynamic {
            .community-dynamic {
                width: 172px;
                overflow: hidden;
                padding: 0 5px 10px;

                .community-dynamic-container {
                    width: 100%;
                    border-radius: 6px;
                    background-color: #fff;
                    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.06);
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
                }
            }
        }
    }
</style>