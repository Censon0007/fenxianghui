<template>
    <div class="questionnaire">
        <div class="questionnaire-content">
            <p class="questionnaire-ques">1.您对纷享荟APP整体印象如何 ?</p>
            <start :score="3"></start>
        </div>
        <div class="questionnaire-content">
            <p class="questionnaire-ques">2.您觉得纷享荟对你健康改善上给予了帮助么？</p>
            <start :score="2"></start>
        </div>
        <div class="questionnaire-content">
            <p class="questionnaire-ques">3.您觉得纷享荟对你健康改善上给予了帮助么？</p>
            <start :score="2"></start>
        </div>
        <div class="questionnaire-content">
            <p class="questionnaire-ques">4.您对调养家APP那方面比较喜欢？（多选）</p>
            <cube-checkbox-group @input="checkQues" v-model="checkList" :options="options"/>
        </div>
        <div class="questionnaire-content">
            <p class="questionnaire-ques">5.您的建议，是我们持续前进的动力。</p>
            <cube-textarea v-model="area" :placeholder="placeholder" :maxlength="maxlength" class="questionnaire-area"></cube-textarea>
        </div>
        <div class="questionnaire-release">
            <button class="questionnaire-release-btn">提交</button>
        </div>
    </div>
</template>

<script>
    import start from '../../components/common/start.vue'

    export default {
        name: "questionnaire",
        data() {
            return {
                checkList: ['1'],
                options: [
                    {
                        label: '非常好玩有趣的功能',
                        value: '1'
                    },
                    {
                        label: '用户体验很流畅，使用起来很爽',
                        value: '2'
                    },
                    {
                        label: '挑战赛的以插画的形式呈现',
                        value: '3'
                    },
                    {
                        label: '健康咨询对我很有帮助',
                        value: '4'
                    }
                ],
                area: '',
                placeholder: '请输入您的宝贵建议',
                maxlength: 200
            }
        },
        components: {
            start
        },
        methods: {
            checkQues (val){ // 多选选择答案后的回调
                console.log(val)
            }
        }
    }
</script>

<style scoped lang="scss">
    .questionnaire {
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 20px 0 72px 16px;
        box-sizing: border-box;
        background-color: #fff;

        .questionnaire-content {
            text-align: left;
            color: #000;
            font-weight: 500;
            font-size: 14px;

            .questionnaire-ques {
                margin-bottom: 8px;
            }

            .questionnaire-area{
                width: 320px;
                height: 120px;
                border: 1px solid #E6E6E6;
                border-radius: 4px;
                overflow: hidden;
                margin-left: 14px;
            }
        }

        .questionnaire-release{
            width: 100%;
            height: 72px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 88;
            .questionnaire-release-btn{
                width: 320px;
                height: 40px;
                color: #fff;
                background-image: linear-gradient(to right, #FF4D36, #FFC33D);
                font-size: 16px;
                border-radius: 30px;
            }
        }
    }
</style>