<template>
    <div class="start">
        <span class="star-item back-repeat" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
    </div>
</template>

<script>
    export default {
        name: "start",
        props: {
            score: Number, // 评分
        },
        computed: {
            starClasses() {
                const {score} = this
                const arr = []
                // 向arr中添加n个'on'
                const scoreInteger = Math.floor(score)
                for (let index = 0; index < scoreInteger; index++) {
                    arr.push('on')
                }
                // 向arr中添加m个'off'
                while (arr.length<5) {
                    arr.push('off')
                }
                return arr
            }
        }
    }
</script>

<style scoped lang="scss">
    .start {
        display: flex;
        margin-left: 14px;
        margin-bottom: 22px;
        .star-item {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            &:last-child{
                margin-right: 0;
            }
            &.on{
                background-image: url("../../assets/images/Icon_shoucang_select.png");
            }
            &.off{
                background-image: url("../../assets/images/Icon_shoucang_nor.png");
            }
        }
    }

</style>