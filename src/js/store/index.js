import Vue from 'vue';
import Vuex from 'vuex';

import gMap from './modules/gMap';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    gMap
  },
  strict: process.env.NODE_ENV !== 'production'
});
