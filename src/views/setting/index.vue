<template>
    <page pageName="setting">
        <div class="setting-wrap">
            <div class="setting-avatar bottom-border-1px">
                <span class="setting-word">头像</span>
                <img class="setting-img" :src="userInfo.avatar" alt="">
                <div class="setting-right back-repeat"></div>
            </div>
            <div class="setting-nickname bottom-border-1px">
                <span class="setting-word">用户名</span>
                <span class="setting-nickname">{{userInfo.nickname}}</span>
            </div>
        </div>
    </page>
</template>

<script>
    export default {
        name: "setting",
        data() {
            return {
                userInfo: {
                    nickname: '那师傅了',
                    avatar: 'http://gbres.dfcfw.com/Files/picture/20200519/A470FA6879010F8F0A5EE64267367E5E_w640h512.jpg'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .setting-wrap{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding: 0 16px;
        background-color: #fff;
    }
    .setting-avatar {
        padding: 12px 0;
        position: relative;
        display: flex;
        align-items: center;

        .setting-img {
            width: 40px;
            height: 40px;
            display: block;
            border-radius: 50%;
            margin-left: auto;
            margin-right: 12px;
        }

        .setting-right {
            margin-right: 0;
            width: 14px;
            height: 16px;
            background-image: url("../../assets/images/Icon_more.png");
        }
    }

    .setting-nickname {
        padding: 13px 0;
        position: relative;
        font-size: 15px;
        color: #939393;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .setting-word {
        font-size: 15px;
        color: #232628;
    }
</style>