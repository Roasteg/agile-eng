import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import Manifesto from "./views/Manifesto";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/manifesto",
    component: Manifesto
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");