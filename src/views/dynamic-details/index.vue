<template>
    <page pageName="dynamic-details">
        <div class="dynamic-details-head">
            <img class="dynamic-details-head-avatar" :src="details.userInfo.avatar" alt="">
            <p class="dynamic-details-head-nickname">{{details.userInfo.nickname}}</p>
            <button class="dynamic-details-head-attention" @click="attention('myPopup')">+&nbsp;&nbsp;关注</button>
            <img class="dynamic-details-head-share" @click="goToShared" src="../../assets/images/Icon_fenxiang.png" alt="">
        </div>
        <div class="dynamic-details-contain">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(img, index) in details.contain.imgList" :key="index">
                        <img :src="img" alt="">
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <button class="swiper-right-slideNum">{{currentIndex}}/{{details.contain.imgList.length}}</button>
            </div>
            <div class="dynamic-details-contain-main">
                <div class="dynamic-details-contain-top bottom-border-1px">
                    <div class="dynamic-details-contain-title ellipsis">{{details.contain.title}}</div>
                    <div class="dynamic-details-contain-desc">{{details.contain.desc}}</div>
                    <div class="dynamic-details-contain-time">{{formatDate(details.contain.dynamicTime)}}&nbsp;{{formatPm(details.contain.dynamicTime)}}</div>
                </div>
                <div class="dynamic-details-contain-dynamic">
                    <div v-if="details.contain.dynamicList.length">
                        <div class="dynamic-details-contain-dynamic-tip">共{{details.contain.dynamicSum}}条评论</div>
                        <div class="dynamic-details-contain-dynamic-item" :class="{'top-border-1px': index > 0}"
                             v-for="(item, index) in details.contain.dynamicList" :key="index">
                            <img class="dynamic-details-contain-dynamic-avatar" :src="item.avatar" alt="">
                            <div class="dynamic-details-contain-dynamic-wrap">
                                <div class="dynamic-details-contain-dynamic-tt">
                                    <div class="dynamic-details-contain-dynamic-middle">
                                        <p class="dynamic-details-contain-dynamic-nickname">{{item.nickname}}</p>
                                        <p class="dynamic-details-contain-dynamic-say">
                                            {{item.desc}}
                                            <span>{{formatDate(item.dynamicTime)}}&nbsp;{{formatPm(item.dynamicTime)}}</span>
                                        </p>
                                    </div>
                                    <div class="dynamic-details-contain-dynamic-right">
                                        <img class="dynamic-details-contain-dynamic-aixin"
                                             src="../../assets/images/aixin.png" alt="">
                                        <span class="dynamic-details-contain-dynamic-likes">{{item.likes}}</span>
                                    </div>
                                </div>
                                <div class="dynamic-details-contain-dynamic-item low" v-for="(item, index) in item.lowList" :key="index" v-show="index < 2">
                                    <img class="dynamic-details-contain-dynamic-avatar" :src="item.avatar" alt="">
                                    <div class="dynamic-details-contain-dynamic-wrap">
                                        <div class="dynamic-details-contain-dynamic-tt">
                                            <div class="dynamic-details-contain-dynamic-middle">
                                                <p class="dynamic-details-contain-dynamic-nickname">{{item.nickname}}</p>
                                                <p class="dynamic-details-contain-dynamic-say">
                                                    {{item.desc}}
                                                </p>
                                            </div>
                                            <div class="dynamic-details-contain-dynamic-right">
                                                <img class="dynamic-details-contain-dynamic-aixin"
                                                     src="../../assets/images/aixin.png" alt="">
                                                <span class="dynamic-details-contain-dynamic-likes">{{item.likes}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dynamic-details-contain-dynamic-item-loadMore" @click="showMoreDynamic">展开12条回复 <i class="cubeic-select"></i></div>
                            </div>
                        </div>
                        <div class="dynamic-details-contain-dynamic-notMore top-border-1px">无更多评论了~</div>
                    </div>
                    <nothing class="dynamic-details-contain-dynamic-nothing" v-else :nothingData="nothingData"></nothing>
                </div>
            </div>
        </div>
        <footer class="dynamic-details-foot">
            <div class="dynamic-details-foot-dynamic">
                <img src="../../assets/images/Icon_pen.png" alt="">
                <span class="ellipsis">说点什么呗</span>
            </div>
            <div class="dynamic-details-foot-commonDiv">
                <img src="../../assets/images/Icon_shoucang_large_select.png" alt="">
                <span>99+</span>
            </div>
            <div class="dynamic-details-foot-commonDiv">
                <img src="../../assets/images/Icon_shoucang_select.png" alt="">
                <span>收藏</span>
            </div>
            <div class="dynamic-details-foot-commonDiv">
                <img src="../../assets/images/Icon_pinglun.png" alt="">
                <span>99+</span>
            </div>
        </footer>
        <div class="dynamic-details-shared" v-if="showPoster">
            <div class="dynamic-details-shared-mask"></div>
            <div class="dynamic-details-shared-contain">
                <img class="dynamic-details-shared-shoushi" src="../../assets/images/Icon_shoushi.png" alt="">
                <p class="dynamic-details-shared-word">长按图片可保存到相册，或点击右上角直接分享</p>
                <div class="dynamic-details-shared-wrap">
                    <img class="dynamic-details-shared-product" src="http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg" alt="">
                    <div class="dynamic-details-shared-person">
                        <img class="dynamic-details-shared-avatar" src="http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg" alt="">
                        <span class="dynamic-details-shared-nickname">额给谁</span>
                    </div>
                    <div class="dynamic-details-shared-bm">
                        <div class="dynamic-details-shared-sm">
                            <p class="dynamic-details-shared-desc two-text-ellipsis">夏日防晒开放订货啦！看看体验馆们怎么说吧吧吧吧吧吧吧吧吧吧吧吧吧吧吧吧</p>
                            <p class="dynamic-details-shared-word">(长按识别右边二维码查看详情)</p>
                        </div>
                        <img class="dynamic-details-shared-qr" src="../../assets/images/qr.png" alt="" />
                    </div>
                </div>
                <img @click="closePoster" class="dynamic-details-shared-close" src="../../assets/images/Icon_guanbi.png" alt="">
            </div>
        </div>
        <shared @go-wx="goWx" @go-poster="goPoster" :visibility="isShow"></shared>
        <cube-popup type="my-popup" :mask="false" ref="myPopup"><span class="cube-popup-contain" >已取关</span></cube-popup>
    </page>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/css/swiper.css';
    import moment from 'moment'
    import nothing from '../../components/common/nothing'
    import shared from '../../components/common/shared'
    import a from "../../assets/images/Icon_fabuweikong.png";

    export default {
        name: "dynamic-details",
        data() {
            return {
                nothingData: {
                    word: '暂无评论，快去说点什么吧',
                    imgUrl: a,
                },
                isShow: 0,
                showPoster: false,
                currentIndex: 1,
                details: {
                    userInfo: {
                        avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                        nickname: '一厘米'
                    },
                    contain: {
                        imgList: [
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592202944515&di=a6247c07d0af516a3ec98f02ac4fd6fc&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1607%2F12%2Fc5%2F24069716_1468300788904_mthumb.jpg',
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592202956041&di=4139c6fe3418263c543b54d6c7c7d83d&imgtype=0&src=http%3A%2F%2Fdl.ppt123.net%2Fpptbj%2F201203%2F2012032518061753.jpg',
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592202978529&di=0d4ebbec12ffdd21824303af240ca013&imgtype=0&src=http%3A%2F%2Ffile.youboy.com%2Fa%2F62%2F39%2F12%2F6%2F6436506.jpg',
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592202993736&di=27c3c3fb001158fcfb6bce9cfaec350f&imgtype=0&src=http%3A%2F%2Ffile2.youboy.com%2Fa%2F85%2F26%2F99%2F6%2F10676486.jpg'
                        ],
                        dynamicTime: 1592202895000,
                        title: '日本减肥进口夜间酵素97种植物果…',
                        desc: '在香格里拉，有了我最美丽的回忆那是个距离蓝天白云很近的地方，那里的人很淳朴即使在没有站台的地方，只要你招招手，司机都会给你停下车！',
                        dynamicSum: 17,
                        dynamicList: [
                            {
                                avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                                nickname: '一直无覅举报',
                                likes: '88',
                                desc: '萃雅新品发布，萃雅清透洁面乳，清新盈润水感透亮',
                                dynamicTime: 1592206545000,
                                lowList: [
                                    {
                                        avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                                        nickname: '11111',
                                        likes: '88',
                                        desc: '萃雅新品发布，萃雅清透洁面乳，清新盈润水感透亮'
                                    },
                                    {
                                        avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                                        nickname: '2222',
                                        likes: '88',
                                        desc: '萃雅新品发布，萃雅清透洁面乳，清新盈润水感透亮'
                                    },
                                    {
                                        avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                                        nickname: '3333',
                                        likes: '88',
                                        desc: '萃雅新品发布，萃雅清透洁面乳，清新盈润水感透亮'
                                    }
                                ]
                            },
                            {
                                avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                                nickname: '一直无覅举报',
                                likes: '88',
                                desc: '萃雅新品发布，萃雅清透洁面乳，清新盈润水感透亮',
                                dynamicTime: 1592206545000,
                                lowList: [
                                    {
                                        avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                                        nickname: '11111',
                                        likes: '88',
                                        desc: '萃雅新品发布，萃雅清透洁面乳，清新盈润水感透亮'
                                    },
                                    {
                                        avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                                        nickname: '2222',
                                        likes: '88',
                                        desc: '萃雅新品发布，萃雅清透洁面乳，清新盈润水感透亮'
                                    },
                                    {
                                        avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                                        nickname: '3333',
                                        likes: '88',
                                        desc: '萃雅新品发布，萃雅清透洁面乳，清新盈润水感透亮'
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
        components: {
            nothing,
            shared
        },
        mounted() {
            const _this = this
            this.mySwiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination'
                },
                on: {
                    slideChange: function () {
                        _this.currentIndex = this.activeIndex + 1
                    }
                }
            })
        },
        methods: {
            formatDate(val) { // 格式化日期 val：时间戳
                return moment(val).format("MM-DD")
            },
            formatPm(val) { // 格式化日期 val：时间戳
                return moment(val).format('HH:mm')
            },
            showMoreDynamic() { // 展开回复

            },
            attention(refId) { // 弹窗提示语
                const component = this.$refs[refId]
                component.show()
                setTimeout(() => {
                    component.hide()
                }, 10000)
            },
            goToShared() { // 显示分享
                this.isShow++
            },
            closePoster() { // 隐藏海报
                this.showPoster = false
            },
            goWx() { // 点击微信图标的回调

            },
            goPoster() { // 点击生成海报的回调
                this.showPoster = true
            }
        }
    }
</script>

<style scoped lang="scss">
    .dynamic-details-head {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        height: 66px;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #fff;

        .dynamic-details-head-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            margin-left: 18px;
            margin-right: 9px;
        }

        .dynamic-details-head-nickname {
            font-size: 15px;
            color: #333333;
        }

        .dynamic-details-head-attention {
            width: 80px;
            height: 32px;
            border-radius: 30px;
            color: #FF693B;
            border: 1px solid #FF693B;
            box-sizing: border-box;
            margin-left: auto;
        }

        .dynamic-details-head-share {
            margin-right: 16px;
            margin-left: 26px;
        }
    }

    .dynamic-details-contain {
        position: absolute;
        top: 66px;
        left: 0;
        right: 0;
        bottom: 50px;
        overflow-y: scroll;

        .swiper-container {
            width: 100%;
            height: 375px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                display: block;
            }

            .swiper-right-slideNum {
                background: #3E3E40;
                border-radius: 11.5px;
                width: 30px;
                height: 24px;
                position: absolute;
                top: 12px;
                right: 12px;
                z-index: 3;
                color: #fff;
            }
        }

        .dynamic-details-contain-main {
            width: 100%;

            .dynamic-details-contain-top {
                width: 100%;
                padding: 15px 15px 12px;
                box-sizing: border-box;
                position: relative;

                .dynamic-details-contain-title {
                    width: 100%;
                    text-align: left;
                    font-size: 20px;
                    color: #000000;
                }

                .dynamic-details-contain-desc {
                    font-size: 15px;
                    color: #666666;
                    letter-spacing: 1.5px;
                    text-align: left;
                    line-height: 20px;
                    margin-top: 10px;
                    margin-bottom: 6px;
                }

                .dynamic-details-contain-time {
                    font-size: 12px;
                    color: #999999;
                    text-align: left;
                }
            }

            .dynamic-details-contain-dynamic {
                width: 100%;
                box-sizing: border-box;
                text-align: left;

                .dynamic-details-contain-dynamic-tip {
                    font-size: 12px;
                    color: #999999;
                    padding-top: 12px;
                    padding-left: 15px;
                }

                .dynamic-details-contain-dynamic-nothing{
                    text-align: center;
                    top: 57px;
                    margin-bottom: 86px;
                }

                .dynamic-details-contain-dynamic-item {
                    margin-left: 15px;
                    padding-top: 18px;
                    display: flex;
                    position: relative;

                    &.low {
                        margin-left: 0;
                        padding-top: 0;

                        .dynamic-details-contain-dynamic-avatar {
                            width: 24px;
                            height: 24px;
                        }
                    }

                    .dynamic-details-contain-dynamic-avatar {
                        width: 34px;
                        height: 34px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }

                    .dynamic-details-contain-dynamic-item-loadMore{
                        font-size: 12px;
                        color: #FF693B;
                        position: relative;
                        margin-bottom: 15px;
                        margin-left: 35px;
                    }

                    .dynamic-details-contain-dynamic-tt {
                        display: flex;
                    }

                    .dynamic-details-contain-dynamic-middle {
                        padding-bottom: 15px;

                        .dynamic-details-contain-dynamic-nickname {
                            font-size: 12px;
                            color: #999999;
                            line-height: 18px;
                            margin-bottom: 5px;
                        }

                        .dynamic-details-contain-dynamic-say {
                            font-size: 14px;
                            color: #333333;
                            line-height: 20px;

                            span {
                                line-height: 12px;
                                font-size: 12px;
                                color: #999999;
                                vertical-align: middle;
                            }
                        }
                    }

                    .dynamic-details-contain-dynamic-right {
                        text-align: center;
                        margin-left: 40px;
                        margin-right: 15px;

                        .dynamic-details-contain-dynamic-aixin {
                            width: 20px;
                            height: 20px;
                        }
                    }
                }

                .dynamic-details-contain-dynamic-notMore {
                    height: 56px;
                    width: 100%;
                    line-height: 56px;
                    text-align: center;
                    font-size: 12px;
                    color: #999999;
                    position: relative;
                }
            }
        }
    }

    .dynamic-details-foot{
        position: fixed;
        bottom: 0;
        z-index: 99;
        width: 100%;
        height: 50px;
        overflow: hidden;
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        .dynamic-details-foot-dynamic{
            background: #F5F5F5;
            border-radius: 16px;
            width: 128px;
            height: 30px;
            display: flex;
            align-items: center;
            margin-right: 15px;
            img{
                margin-left: 9px;
                margin-right: 3px;
            }
            span{
                flex: 1;
                text-align: left;
                font-size: 13px;
                color: #666666;
            }
        }
        .dynamic-details-foot-commonDiv{
            display: flex;
            align-items: center;
            margin-right: 16px;
            margin-left: auto;
            &:last-child{
                margin-right: 0;
            }
            img{
                margin-right: 3px;
            }
            span{
                font-size: 14px;
                color: #333333;
            }
        }
    }

    .dynamic-details-shared{
        position: fixed;
        z-index: 998;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .dynamic-details-shared-mask{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0,0,0,.7);
            z-index: 1;
        }
        .dynamic-details-shared-contain{
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            overflow-y: scroll;
            .dynamic-details-shared-shoushi{
                margin-left: auto;
                margin-right: 30px;
            }
            .dynamic-details-shared-word{
                font-size: 12px;
                color: #FFFFFF;
                line-height: 18px;
                margin-bottom: 22px;
                margin-top: 6px;
            }
            .dynamic-details-shared-wrap{
                width: 340px;
                height: 466px;
                flex-shrink: 0;
                border-radius: 8px;
                overflow: hidden;
                background-color: #fff;
                .dynamic-details-shared-product{
                    width: 100%;
                    height: 340px;
                    display: block;
                }
                .dynamic-details-shared-person{
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                    padding-left: 15px;
                    .dynamic-details-shared-avatar{
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        margin-right: 8px;
                    }
                    .dynamic-details-shared-nickname{
                        font-size: 15px;
                        color: #333333;
                    }
                }
                .dynamic-details-shared-bm{
                    display: flex;
                    justify-content: space-between;
                    padding: 0 20px 0 15px;
                    box-sizing: border-box;
                    .dynamic-details-shared-sm{
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                        justify-content: space-between;
                        .dynamic-details-shared-desc{
                            font-size: 13px;
                            color: #333333;
                            line-height: 18px;
                            width: 168px;
                        }
                        .dynamic-details-shared-word{
                            font-size: 12px;
                            color: #666666;
                            line-height: 18px;
                        }
                    }
                    img{
                        width: 58px;
                        height: 58px;
                        display: block;
                    }
                }
            }

            .dynamic-details-shared-close{
                margin-top: 30px;
            }
        }
    }
</style>