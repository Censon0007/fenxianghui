import axios from 'axios';
import {
    showToast,
    showLoading,
    cleanLoading
} from '../utils/business'

const ConfigBaseURL = 'https://test-hczlife.pingan.com.cn/activity-module'
const defaltMsg = '网络连接超时，请稍后重试'

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // 获取token
        const token = localStorage.getItem('xx_token')
        // 设置参数格式
        if (!config.headers['Content-Type']) {
            config.headers = {
                'Content-Type': 'application/json'
            }
        }
        // 添加token到headers
        if (token) {
            config.headers.token = token
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 添加响应拦截器
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

export default function (args) {
    const req = {
        method: 'post',
        baseURL: ConfigBaseURL, // 请求通用前部分域名地址 -- 不设置用的是本机的域名
        timeout: 10000, // 设置超时时间
        ...args,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            url: `${ConfigBaseURL}${args.url}`
        }
    }
    showLoading()
    return new Promise((resolve, reject) => {
        axios(req).then((response) => {
            cleanLoading()
            resolve({
                ...response
            })
        }).catch(error => {
            const msg = error.message !== undefined ? error.message : defaltMsg
            cleanLoading()
            showToast({txt: msg})
            reject(error)
        })
    })
}