import Vue from 'vue'
import VueRouter from 'vue-router'
import Community from '../views/Community.vue'

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
    }
]

const router = new VueRouter({
    routes
})

export default router