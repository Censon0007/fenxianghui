import http from '@/common/http'

export default {
    hello(data) {
        return http({
            methods: 'post',
            url: '/Activity/findActivityConfignH5',
            data
        })
    }
}