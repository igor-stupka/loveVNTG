import Vue from 'vue';
import VeeValidate from 'vee-validate';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './js/App.vue';

import { store } from './js/store';

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    invalid: 'invalid'
  },
  events: 'change'
});

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAxJKJFLs8s-yAWfMs_PLqD8_mUAd-cbBU'
  }
});

new Vue({
  el: '#app',
  store,
  render: (h) => h(App)
});
