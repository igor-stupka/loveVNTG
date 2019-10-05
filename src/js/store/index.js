import Vue from 'vue';
import Vuex from 'vuex';

import gMap from './modules/gMap';
import fields from './modules/fields';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    gMap,
    fields
  }
  // strict: process.env.NODE_ENV !== 'production'
});
