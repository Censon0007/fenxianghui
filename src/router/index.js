import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '../views/homepage'
import dynamicRelease from '../views/dynamic/release.vue'
import dynamicDetail from '../views/dynamic/detail.vue'
import questionnaire from '../views/questionnaire'
import communityMe from '../views/community-me'
import attention from '../views/attention'
import setting from '../views/setting'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HOME',
        component: homepage
    },
    {
        path: '/community',
        name: 'Community',
        meta: {
            title: '互动社区'
        },
        component: () =>
            import ( /* webpackChunkName: "community" */ '../views/community/index.vue')
    },
    {
        path: '/community-me',
        name: 'community-me',
        meta: {
            title: '我的社区主页'
        },
        component: communityMe
    },
    {
        path: '/setting',
        name: 'setting',
        meta: {
            title: '我的关注'
        },
        component: setting
    },
    {
        path: '/attention',
        name: 'attention',
        meta: {
            title: '我的关注'
        },
        component: attention
    },
    {
        path: '/questionnaire',
        name: 'questionnaire',
        meta: {
            title: '调查问卷'
        },
        component: questionnaire
    },
    {
        path: '/dynamic-release',
        name: 'dynamic-release',
        meta: {
            title: '发布动态'
        },
        component: dynamicRelease
    },
    {
        path: '/homepage',
        name: 'homepage',
        meta: {
            title: '首页'
        },
        component: homepage
    },
    {
        path: '/dynamic-detail',
        name: 'dynamic-detail',
        meta: {
            title: '动态详情'
        },
        component: dynamicDetail
    },
]

const router = new VueRouter({
    routes
})

export default router