import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Payments from "./views/Payments.vue";
import AnalysesMonth from './views/AnalysesMonth';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/payment/:city/:entity/:year/:month",
      name: "payments",
      component: Payments
    },
    {
      path: "/analyses/month/:city/:entity/:year/:month",
      name: "analyses-month",
      component: AnalysesMonth
    }
  ]
});
