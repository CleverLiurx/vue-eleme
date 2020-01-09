import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './axios';
import showMsg from './plugin/showMsg'
import api from './api/index'
// import './plugin/vconsoleUtil.js'


Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(MintUI);
Vue.use(showMsg);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
