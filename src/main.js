import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import HighchartsVue from "highcharts-vue";
import XLSX from 'xlsx'
import VueAxios from "vue-axios";
import axios from "axios";

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(Antd, HighchartsVue);
Vue.use(XLSX)

new Vue({
    router,
    store,
    render: h => h(App)

}).$mount("#app");

