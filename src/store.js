import Vue from 'vue';
import Vuex from 'vuex';

import { createStore } from 'scaife-skeleton';
import readerCreateStore from './reader/config';

Vue.use(Vuex);

const skeletonStore = createStore();
const readerStore = readerCreateStore();

export default new Vuex.Store({
  modules: {
    [readerStore.namespace]: readerStore.store,
    [skeletonStore.namespace]: skeletonStore.store,
  },
});
