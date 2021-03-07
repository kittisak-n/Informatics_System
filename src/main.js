import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import HighchartsVue from "highcharts-vue";
import VueLoading from 'vue-loading-template';
Vue.config.productionTip = false
Vue.use(Antd, HighchartsVue);
Vue.use(VueLoading, /** options **/);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");