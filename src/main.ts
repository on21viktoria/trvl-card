import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
// Vue.use(VueRouter);

// const routes = [
//   { path: '/helloworld', component: HelloWorld },
// ]
// const router = new VueRouter({
//   routes
// })

new Vue({
  // router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
