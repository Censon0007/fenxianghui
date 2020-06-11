import Vue from 'vue'

const vue = new Vue()

let loading = null
let toast = null

export function showToast(config) {
    toast = vue.$createToast({
        type: 'txt',
        time: 3000,
        ...config
    }).show()
}

export function cleanToast() {
    toast && toast.hide()
}

export function showLoading(config) {
    loading = vue.$createToast({
        type: 'loading',
        time: 1000,
        ...config
    }).show()
}

export function cleanLoading() {
    loading && loading.hide()
}