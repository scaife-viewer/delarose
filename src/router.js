import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';

Vue.use(Router);

const routes = [
  { path: '', component: App, name: 'app' },
];

const router = new Router({
  mode: 'history',
  base: '',
  routes,
});

export default router;
