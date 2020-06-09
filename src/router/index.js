import Vue from 'vue'
import VueRouter from 'vue-router'
import Community from '../views/Community.vue'
import homepage from '../views/homepage'
import dynamic from '../views/dynamic'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HOME',
        component: Community
    },
    {
        path: '/community',
        name: 'Community',
        meta: {
            title: '互动社区'
        },
        component: () =>
            import ( /* webpackChunkName: "community" */ '../views/Community.vue')
    },
    {
        path: '/dynamic',
        name: 'dynamic',
        meta: {
            title: '发布动态'
        },
        component: dynamic
    },
    {
        path: '/homepage',
        name: 'homepage',
        meta: {
            title: '首页'
        },
        component: homepage
    }
]

const router = new VueRouter({
    routes
})

export default router