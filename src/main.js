import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import "./plugins/element";

import "./main.less";
import router from "./route/index.js";
import store from "./store/index.js";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
