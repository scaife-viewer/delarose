import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import { IMAGE_VIEWER_ROUTE } from './constants';

Vue.use(Router);

const routes = [
  { path: '/', redirect: 'reader' },
  { path: '/reader', component: App, name: 'reader' },
  { path: '/image-viewer', component: App, name: IMAGE_VIEWER_ROUTE },
];

const router = new Router({
  mode: 'history',
  base: '',
  routes,
});

export default router;
