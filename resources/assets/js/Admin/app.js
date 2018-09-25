require('./bootstrap');

window.Vue = require('vue');

import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import middleware from './router/middleware';
import router from "./router/routes";
import {store} from "./store/store";

import App from './App';
import {ENV} from "./config/config";
import VModal from 'vue-js-modal';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VModal,{ dialog: true });
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
    load: {
        key: ENV.MAP_API_KEY,
        // libraries: 'places', // This is required if you use the Autocomplete plugin
    }
});

router.beforeEach(middleware);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});
