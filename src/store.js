import Vue from 'vue';
import Vuex from 'vuex';

import { createStore } from 'scaife-skeleton';

Vue.use(Vuex);

const skeletonStore = createStore();

export default new Vuex.Store({
  modules: {
    [skeletonStore.namespace]: skeletonStore.store,
  },
});
