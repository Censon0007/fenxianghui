<template>
    <transition name="share">
        <div class="shared" v-show="isVisible" @touchmove.prevent>
            <div class="share-mask" @click.prevent.stop="closeShare"></div>
            <transition name="share-container">
                <div class="share-contain" v-show="isVisible">
                    <p class="share-words">给小伙伴们分享下吧</p>
                    <div class="share-middle">
                        <div @click.prevent.stop="goToWx" class="common-div left-div"><img src="../../assets/images/weixin.png" alt=""><span>微信好友</span></div>
                        <div @click.prevent.stop="goToPoster" class="common-div"><img src="../../assets/images/shengchengtupian.png" alt=""><span>生成海报</span></div>
                    </div>
                    <button class="share-close top-border-1px" @click.prevent.stop="closeShare">取消</button>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "shared",
        data() {
          return {
              isVisible: false
          }
        },
        props: {
            visibility: {
                type: Number,
                default: 0
            }
        },
        watch: {
            visibility() {
                this.isVisible = true
            }
        },
        methods: {
            closeShare() {
                this.isVisible = false
            },
            goToWx() {
                this.isVisible = false
                this.$emit('go-wx')
            },
            goToPoster() {
                this.isVisible = false
                this.$emit('go-poster')
            }
        }
    }
</script>

<style scoped lang="scss">
    .share-enter, .share-leave-active {
        opacity: 0;
    }

    .share-enter-active, .share-leave-active {
        transition: all .3s ease-in-out;
    }

    .share-container-enter, .share-container-leave-active {
        transform: translate3d(0, 100%, 0);
    }

    .share-container-enter, .share-container-leave-active {
        transition: all .3s ease-in-out;
    }

    .shared {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 9999;

        .share-mask {
            position: absolute;
            pointer-events: auto;
            overflow: hidden;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .7);
            z-index: 1;
        }

        .share-contain {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 200px;
            background-color: #fff;
            border-radius: 10px 10px 0 0;
            z-index: 2;
            .share-words{
                font-size: 13px;
                color: #666666;
                line-height: 18px;
                margin-top: 18px;
                margin-bottom: 28px;
            }
            .share-middle{
                display: flex;
                justify-content: center;
                width: 100%;
                .common-div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: 45px;
                        height: 45px;
                        display: block;
                    }
                }
                .left-div{
                    margin-right: 112px;
                }
            }
            .share-close{
                width: 100%;
                height: 40px;
                position: absolute;
                bottom: 0;
                left: 0;
                font-size: 16px;
                color: #666666;
            }
        }
    }
</style>