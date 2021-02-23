import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedule: null,
    status_login: false,
    url: "http://localhost:8080",
  },
  mutations: {},
  actions: {},
  modules: {},
});
