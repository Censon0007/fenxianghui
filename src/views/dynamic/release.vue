<template>
    <div class="dynamic-content">
        <div class="dynamic-title bottom-border-1px">
            <div class="dynamic-pen back-repeat"></div>
            <input class="dynamic-title-input" max="20" placeholder="      请输入动态标题（必填）" type="text">
            <div class="dynamic-title-sum">0/20</div>
        </div>
        <div class="dynamic-text bottom-border-1px">
            <div class="dynamic-pen back-repeat"></div>
            <textarea class="dynamic-text-textarea" placeholder="   请输入动态正文，获得更多人点赞吧~" maxlength="500"></textarea>
            <div class="dynamic-text-sum">0/500</div>
        </div>
        <div class="dynamic-upload-image bottom-border-1px">
            <p class="dynamic-upload-title">添加图片（0/9）</p>
            <p class="dynamic-upload-info">至少上传一张图片才能发布动态，赢取纷享币哦~</p>
            <div class="dynamic-upload-imgs back-repeat" v-for="(img, index) in uplodaImages"
                 :style="{backgroundImage: 'url('+ img.link +')'}" :key="index">
                <div class="dynamic-upload-detet back-repeat"></div>
                <div class="dynamic-upload-loading" v-if="img.unload">
                    <div>
                        <div class="dynamic-upload-loading-icon back-repeat"></div>
                        <span class="dynamic-upload-loading-schedule">70%</span>
                    </div>
                </div>
            </div>
            <div class="dynamic-upload-imgs back-repeat" v-if="defaultUploadImag" @click.prevent="chooseImages"></div>
        </div>
        <div class="dynamic-label">
            <p class="dynamic-label-title">添加标签</p>
            <p class="dynamic-label-labels" v-for="(item, index) in labels" :key="index">{{item}}</p>
        </div>
        <div class="dynamic-release">
            <button class="dynamic-release-btn" :class="{redald: status === 1}" @click="showNotDynamic">发布动态</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dynamic-release",
        data() {
            return {
                uplodaImages: [
                    {
                        link: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4250058738,780121024&fm=11&gp=0.jpg'
                    },
                    {
                        link: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4250058738,780121024&fm=11&gp=0.jpg'
                    },
                    {
                        link: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4250058738,780121024&fm=11&gp=0.jpg'
                    }
                ],
                labels: ['旅游', '你好', '王鹏浩', '加油', '加油', '加油', '加油', '加油'],
                status: 0 // 发布动态按钮的状态
            }
        },
        computed: {
            defaultUploadImag() {
                return this.uplodaImages.length < 8
            }
        },
        methods: {
            chooseImages() { // 添加图片
                this.$createActionSheet({
                    title: '',
                    data: [
                        {content: '拍照'},
                        {content: '从手机相册选择'}
                    ],
                    onSelect: item => {
                        this.$createToast({
                            txt: `Clicked ${item.content}`,
                            type: 'correct',
                            time: 1000
                        }).show()
                    },
                    onCancel: () => {
                        console.log('Clicked canceled');
                    }
                }).show()
            },
            showNotDynamic() { // 动态尚未发布弹窗
                this.$createDialog({
                    type: 'confirm',
                    content: '你的‘动态’尚未发布，返回后动态内容将不做保存',
                    maskClosable: true,
                    icon: 'cubeic-important',
                    confirmBtn: {
                        text: '去发布',
                        active: true,
                        disabled: false,
                        href: 'javascript:;'
                    },
                    cancelBtn: {
                        text: '确定返回',
                        active: false,
                        disabled: false,
                        href: 'javascript:;'
                    },
                    onConfirm: () => { // 右边按钮事件回调
                        this.$createToast({
                            type: 'warn',
                            time: 1000,
                            txt: '点击确认按钮'
                        }).show()
                    },
                    onCancel: () => { // 左边按钮事件回调
                        this.$createToast({
                            type: 'warn',
                            time: 1000,
                            txt: '点击取消按钮'
                        }).show()
                    }
                }).show()
            }
        }
    }
</script>

<style scoped lang="scss">
    .dynamic-content {
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0 15px 72px;
        box-sizing: border-box;
        overflow-y: scroll;
        background-color: #fff;

        &::-webkit-scrollbar {
            display: none;
        }

        .dynamic-title {
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            position: relative;

            .dynamic-title-input {
                height: 20px;
                font-size: 14px;
                flex: 1;
            }

            .dynamic-pen {
                position: absolute;
                width: 16px;
                height: 16px;
                top: 50%;
                transform: translateY(-50%);
                background-image: url("../../assets/images/Icon_pen.png");
            }

            .dynamic-title-sum {
                font-size: 14px;
                color: #999;
            }
        }

        .dynamic-text {
            width: 100%;
            height: 130px;
            box-sizing: border-box;
            padding-top: 10px;
            padding-bottom: 15px;
            position: relative;
            margin-bottom: 18px;

            .dynamic-text-textarea {
                width: 100%;
                height: 100%;
                font-size: 14px;
                overflow: hidden;
            }

            .dynamic-pen {
                position: absolute;
                width: 16px;
                height: 16px;
                top: 10px;
                left: 0;
                background-image: url("../../assets/images/Icon_pen.png");
            }

            .dynamic-text-sum {
                position: absolute;
                right: 0;
                bottom: 15px;
                font-size: 14px;
                color: #999;
            }
        }

        .dynamic-upload-image {
            position: relative;
            margin-bottom: 20px;
            padding-bottom: 12px;

            .dynamic-upload-title {
                font-size: 14px;
                color: #000;
                font-weight: 700;
                text-align: left;
            }

            .dynamic-upload-info {
                margin: 6px 0 10px;
                color: #999;
                text-align: left;
            }

            .dynamic-upload-imgs {
                position: relative;
                width: 80px;
                height: 80px;
                margin-right: 5px;
                background-image: url("../../assets/images/images.png");
                border-radius: 4px;
                overflow: hidden;
                display: inline-block;

                &:last-child {
                    margin-right: 0;
                }

                .dynamic-upload-detet {
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 20px;
                    height: 20px;
                    background-image: url("../../assets/images/Icon_delet.png");
                }

                .dynamic-upload-loading {
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, .7);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .dynamic-upload-loading-icon {
                        width: 18px;
                        height: 18px;
                        background-image: url("../../assets/images/Icon_jiazai_baise.png");
                        margin-bottom: 8px;
                    }

                    .dynamic-upload-loading-schedule {
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }
        }

        .dynamic-label {
            position: relative;
            text-align: left;

            .dynamic-label-title {
                font-size: 14px;
                color: #000;
                font-weight: 700;
                margin-bottom: 18px;
                text-align: left;
            }

            .dynamic-label-labels {
                width: 100px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background-color: #F5F5F5;
                border-radius: 15px;
                display: inline-block;
                margin-right: 12px;
                color: #666666;
                font-size: 13px;

                &:last-child {
                    margin-right: 0;
                }

                &:nth-child(n+3) {
                    margin-bottom: 12px;
                }
            }
        }

        .dynamic-release {
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

            .dynamic-release-btn {
                width: 320px;
                height: 40px;
                color: #fff;
                background-color: #ccc;
                font-size: 16px;
                border-radius: 30px;

                &.redald {
                    background-image: linear-gradient(to right, #FF4D36, #FFC33D);
                }
            }
        }
    }
</style>