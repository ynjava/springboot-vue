import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from "element-ui";
import './assets/sass/element-variables.scss'

if (process.env.NODE_ENV !== 'production') {
    Vue.use(ElementUI);
}

/**引入iconfont字体库*/
import "./assets/font/iconfont/iconfont.css";

/**引入封装的axios*/
import {weiAxios, weiAxiosDown} from './utils/axios';

Vue.prototype.$axios = weiAxios;
Vue.prototype.$axiosDown = weiAxiosDown;

/**引入全局变量和方法*/
import globalVariable from './utils/global_variable'
import globalFunction from './utils/global_function'

Vue.prototype.$global = globalVariable;
Vue.prototype.$globalFun = globalFunction;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
