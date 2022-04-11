import Vue from 'vue';

import 'vue-material-design-icons/styles.css';
import vuetify from './plugins/vuetify';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
