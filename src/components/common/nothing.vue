<template>
    <div class="nothing-contain">
        <img class="nothing-img" :src="nothingData.imgUrl" alt="">
        <p class="nothing-word">{{nothingData.word}}</p>
        <button class="nothing-btnWord" @click="go">{{nothingData.btnWord}}</button>
    </div>
</template>

<script>
    export default {
        name: "nothing",
        props: {
            nothingData: {
                type: Object,
                default() {
                    return {}
                }
            },
        },
        methods: {
            go() {
                this.$emit('goTo')
            }
        }
    }
</script>

<style scoped lang="scss">
    .nothing-contain {
        width: 100%;
        height: 100%;
        position: relative;
        top: 46px;
        .nothing-img{
            width: 79px;
        }
        .nothing-word{
            font-size: 14px;
            color: #919191;
            margin: 22px 0 22px;
        }
        .nothing-btnWord{
            width: 100px;
            height: 30px;
            border: 1px solid #FF693B;
            color: #FF693B;
            border-radius: 30px;
        }
    }
</style>