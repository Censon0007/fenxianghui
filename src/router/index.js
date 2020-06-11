import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '../views/homepage'
import dynamicRelease from '../views/dynamic/release.vue'
import dynamicDetail from '../views/dynamic/detail.vue'
import questionnaire from '../views/questionnaire'

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