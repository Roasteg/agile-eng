import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import Manifesto from "./views/Manifesto";
import Scrum from "./views/Scrum";
import Risks_eng from "./views/Risks";
import Stories_rus from "./views/Stories-rus";

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
  },
  {
    path: "/scrum",
    component: Scrum
  },
  {
    path: "/stories-rus",
    component: Stories_rus
  },
  {
    path:"/risks",
    component: Risks_eng
  },
  {
    path: "/wiki",
    beforeEnter() {location.href = 'https://dev.azure.com/bredbrains/Wish%20List/_wiki/wikis/Wish-List.wiki/2/Introduction'}
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
