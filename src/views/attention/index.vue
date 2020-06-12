<template>
    <page pageName="attention">
        <div class="attention-contain" v-if="attentionList.length">
            <div v-for="(item, index) in attentionList" :key="index" class="attention-everyone bottom-border-1px">
                <img class="attention-avatar" :src="item.avatar" alt="">
                <p class="attention-nickname ellipsis">{{item.nickname}}</p>
                <button class="attention-btn" @click="unsubscribe('myPopup')">取消关注</button>
            </div>
        </div>
        <div class="attention-nothing" v-else>
            <img class="attention-nothing-img" src="../../assets/images/icon_weiguanzhu.png" alt="">
            <p class="attention-nothing-w">你暂未关注任何用户~</p>
        </div>
        <cube-popup type="my-popup" :mask="false" ref="myPopup">已取关</cube-popup>
    </page>
</template>

<script>
    export default {
        name: "attention",
        data() {
            return {
                attentionList: [
                    {
                        avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg',
                        nickname: '暗改无法狂放不羁AV发安抚回家萨芬比较暗深V放假啊和深V福建'
                    }
                ]
            }
        },
        methods: {
            unsubscribe(refId) {
                const component = this.$refs[refId]
                component.show()
                setTimeout(() => {
                    component.hide()
                }, 1000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .attention-contain {
        padding: 0 16px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        overflow-y: scroll;

        .attention-everyone {
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            padding: 14px 0 16px;

            .attention-avatar {
                width: 34px;
                height: 34px;
                display: block;
                margin-right: 14px;
                border-radius: 50%;
                overflow: hidden;
            }

            .attention-nickname {
                color: #232628;
                font-size: 15px;
                width: 195px;
                text-align: left;
                line-height: 20px;
            }

            .attention-btn {
                margin-left: auto;
                border: 1px solid #CCCCCC;
                border-radius: 20px;
                width: 72px;
                height: 28px;
                color: #666;
                font-size: 12px;
            }
        }
    }

    .attention-nothing {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 204px;
        .attention-nothing-img{
            width: 72px;
            display: block;
            margin-bottom: 15px;
        }
        .attention-nothing-w{
            font-size: 14px;
            color: #999999;
        }
    }
</style>