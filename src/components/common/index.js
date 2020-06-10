import Page from './Page.vue'
import headPic from './head-pic.vue'
import scrollWrap from './scroll-wrap.vue'

const components = [
    Page,
    headPic,
    scrollWrap
]

export default {
    install(Vue) {
        components.forEach(comp => {
            Vue.component(comp.name, comp)
        });
    }
}