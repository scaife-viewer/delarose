import Vue from 'vue';
import Vuex from 'vuex';

import { createStore as createSkeletonStore } from 'scaife-skeleton';
import readerCreateStore from './reader/config';
import createStore from './config';

Vue.use(Vuex);

const skeletonStore = createSkeletonStore();
const readerStore = readerCreateStore();

export default new Vuex.Store({
  modules: {
    [readerStore.namespace]: readerStore.store,
    [skeletonStore.namespace]: skeletonStore.store,
  },
  ...createStore(),
});
