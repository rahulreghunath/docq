require('./bootstrap');

window.Vue = require('vue');

import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';


import router from "./router/routes";
import {store} from "./store/store";
import {MAP_API_KEY} from "./constants/constants";

/**
 * Vue Router
 */
import VueRouter from 'vue-router';
import middleware from './router/middleware';
import VModal from 'vue-js-modal';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VModal);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
    load: {
        key: MAP_API_KEY,
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