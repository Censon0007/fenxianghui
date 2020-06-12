<template>
    <page pageName="my-community-contain">
        <div class="my-community-main back-repeat">
            <div class="my-community-personal">
                <div class="my-community-avatar">
                    <img class="my-community-img" src="../../assets/images/avatar.jpg" alt="">
                    <span class="my-community-vip"></span>
                </div>
                <span class="my-community-nickname">什邡市水房</span>
                <span class="my-community-setting back-repeat" @click="goToSetting"></span>
                <div class="my-community-homepage" @click="goToHomepage">社区首页&nbsp;&gt;</div>
            </div>
            <div class="my-community-data">
                <div class="my-community-style">
                    <span class="my-community-top">123</span>
                    <span>获赞数</span>
                </div>
                <div class="my-community-style" @click="goToAttention">
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
            <div v-for="(item, index) in tabs" :class="{on: currentIndex === index}" @click.stop="checkIndex(index)"
                 :key="index">{{item}}
                <div v-if="currentIndex === index" class="my-community-sign"></div>
            </div>
        </div>
        <div class="my-community-content" v-if="currentIndex === 0">
            <div class="my-community-dynamic" v-if="waterfallData.length">
                <waterfall :col="2" :data="waterfallData">
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
                                <button class="community-dynamic-subs" v-if="item.status">{{item.status}}</button>
                            </div>
                        </div>
                    </template>
                </waterfall>
            </div>
            <nothing :nothingData="nothingData" @goTo="goToHomepage" v-else></nothing>
        </div>
        <div class="my-community-content" v-if="currentIndex === 1">
            <div class="my-community-comment" v-if="commentList.length">
                <div v-for="(item, index) in commentList" :key="index" class="my-community-comment-contain bottom-border-1px">
                    <div class="my-community-comment-person">
                        <img class="my-community-comment-avatar" :src="item.personInfo.avatar" alt="" />
                        <div class="my-community-comment-nickname">{{item.personInfo.nickname}}</div>
                        <div class="my-community-comment-date">{{formatDate(item.personInfo.date)}}</div>
                    </div>
                    <div class="my-community-comment-dynamic two-text-ellipsis">{{item.personInfo.dynamic}}</div>
                    <div class="my-community-comment-comment">
                        <img class="my-community-comment-img" :src="item.dynamicInfo.bannerLink" alt="" />
                        <div class="my-community-comment-info">
                            <span class="my-community-comment-name">{{item.dynamicInfo.name}}</span>
                            <p class="my-community-comment-title two-text-ellipsis">{{item.dynamicInfo.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <nothing :nothingData="nothingData" @goTo="goToHomepage" v-else></nothing>
        </div>
        <div class="my-community-content" v-if="currentIndex === 2">
            <div class="my-community-dynamic" v-if="waterfallData.length">
                <waterfall :col="2" :data="waterfallData">
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
                </waterfall>
            </div>
            <nothing :nothingData="nothingData" @goTo="goToHomepage" v-else></nothing>
        </div>
    </page>
</template>

<script>
    import nothing from '../../components/common/nothing'
    import a from '../../assets/images/Icon_fabuweikong.png'
    import b from '../../assets/images/Icon_pinglunweikong.png'
    import c from '../../assets/images/Icon-shoucangweik.png'
    import moment from 'moment'

    export default {
        name: "community-me",
        data() {
            return {
                btnWord: '发布动态',
                word: '你还未发布动态哦，去发布一条吧~',
                imgUrl: a,
                tabs: ['我的发布', '我的评论', '我的收藏'],
                currentIndex: 0,
                waterfallData: [{
                    img: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                    head: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg  ',
                    desc: '标题最长字段标题最长',
                    name: '标题最长字段标题最长字段标题最长字段',
                    count: 301,
                    status: '已采纳'
                }],
                commentList: [
                    {
                        personInfo: {
                            avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                            nickname: '张三啊',
                            date: 1591945460000,
                            dynamic: '一直都在使用无限极产品，很好。使用无限极产品，很好。使用无限极产品，很放心。个哦IQ和我覅书法家卡本身就开发按实际开发',
                        },
                        dynamicInfo: {
                            bannerLink: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                            name: '@黑夜太难熬',
                            title: '绪对免疫力有很大的影响，情绪不像感冒发烧，来了又走，它是人本身的一种生最长字段思考法办事广发卡把数据开放阿巴斯讲课费把借款方'
                        }
                    },
                    {
                        personInfo: {
                            avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                            nickname: '张三啊',
                            date: 1591945460000,
                            dynamic: '一直都在使用无限极产品，很好。使用无限极产品，很好。使用无限极产品，很放心。个哦IQ和我覅书法家卡本身就开发按实际开发',
                        },
                        dynamicInfo: {
                            bannerLink: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                            name: '@黑夜太难熬',
                            title: '绪对免疫力有很大的影响，情绪不像感冒发烧，来了又走，它是人本身的一种生最长字段思考法办事广发卡把数据开放阿巴斯讲课费把借款方'
                        }
                    }
                ]
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
                this.$router.push('/homepage')
            },
            goToAttention() { // 去我的关注
                this.$router.push('/attention')
            },
            goToSetting() { // 去设置
                this.$router.push('/setting')
            },
            http() { // 发送请求
                this.$api.hello({
                    activityId: '1270919190450147328',
                    templateId: '1270919190806663168'
                })
            },
            formatDate(val) { // 格式化日期 val：时间戳
                return moment(val).format("YYYY-MM-DD")
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
        box-sizing: border-box;
        overflow-y: scroll;

        .my-community-dynamic {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            padding: 10px 10px 0;

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
        }

        .my-community-comment {
            width: 100%;
            background-color: #fff;

            .my-community-comment-contain {
                position: relative;
                width: 100%;
                padding: 20px 12px 16px;
                .my-community-comment-person{
                    display: flex;
                    align-items: center;
                    .my-community-comment-avatar{
                        width: 30px;
                        height: 30px;
                        display: block;
                        margin-right: 10px;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                    .my-community-comment-nickname{
                        font-size: 14px;
                        color: #000;
                    }
                    .my-community-comment-date{
                        margin-left: auto;
                        font-size: 12px;
                        color: #999;
                    }
                }
                .my-community-comment-dynamic{
                    margin: 8px 0;
                    text-align: left;
                    font-size: 14px;
                    line-height: 20px;
                    color: #333;
                }
                .my-community-comment-comment{
                    display: flex;
                    background-color: #F5F5F5;
                    width: 100%;
                    border-radius: 4px;
                    overflow: hidden;
                    .my-community-comment-img{
                        width: 80px;
                        height: 80px;
                        display: block;
                        border-radius: 4px;
                        overflow: hidden;
                        margin-right: 8px;
                        flex-shrink: 0;
                    }
                    .my-community-comment-info{
                        text-align: left;
                        padding: 8px 10px 12px 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .my-community-comment-name{
                            font-size: 12px;
                            color: #000;
                        }
                        .my-community-comment-title{
                            font-size: 12px;
                            color: #666;
                        }
                    }
                }
            }
        }
    }
</style>