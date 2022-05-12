import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Editor from "./views/Editor.vue";
import Contactform from "./views/Contactform.vue";
import VueAxios from "vue-axios";
import axios from 'axios';

Vue.config.productionTip = false;
export const EventBus = new Vue();
Vue.use(BootstrapVue);
Vue.use(VueRouter);

//TODO eventuell löschen
Vue.use(VueAxios, axios);

const routes = [
  { path: "/", component: Home },
  { path: "/editor/:id", component: Editor },
  { path: "/checkout", component: Contactform },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
