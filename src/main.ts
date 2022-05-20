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
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

Vue.config.productionTip = false;

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWE3ajoNTWO5IgS0Dam07CUSk3mXGxM6g",
  authDomain: "trvl-card-4b9a2.firebaseapp.com",
  projectId: "trvl-card-4b9a2",
  storageBucket: "trvl-card-4b9a2.appspot.com",
  messagingSenderId: "690874223986",
  appId: "1:690874223986:web:e7b64495d2b37c64d221eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;

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
