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
import Postcard from "./views/Postcard.vue";
import store from './store/pictures'

Vue.config.productionTip = false;
export const EventBus = new Vue();
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/editor/:id", component: Editor },
  { path: "/checkout", component: Contactform },
  { path: "/postcard", component: Postcard}
];
const router = new VueRouter({
  routes,
});

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
