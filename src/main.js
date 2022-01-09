import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import lodash from "lodash"
import './assets/tailwind.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$lodash = lodash;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
