
require('./bootstrap');

window.Vue = require('vue');

import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'

import router from "./router/routes";

/**
 * Vue Router
 */
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
});