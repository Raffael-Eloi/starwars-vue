import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes.js';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
