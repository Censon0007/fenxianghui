import 'lib-flexible/flexible'
import './common/reset/reset.css';
import './common/css/cube-reset.css';
import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import commonComponents from '@/components/common'
import waterfall from 'vue-waterfall2'
import api from './common/api'

Vue.config.productionTip = false

Vue.use(waterfall)
Vue.use(commonComponents);

Vue.prototype.$api = api

FastClick.attach(document.body);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')