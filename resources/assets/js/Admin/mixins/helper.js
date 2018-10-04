/**
 * Helper functions
 */
import {Stretch} from '../components/loading-spinner/spinner';
import kebabCase from 'lodash/kebabCase';

/**
 * user asset urls
 * @type {{methods: {asset(*): string}}}
 */
export const asset = {
    methods: {
        /**
         * Return fully qualified url of given path
         * @param path
         * @returns {string}
         */
        asset(path) {
            if (location.hostname === 'localhost') {
                return window.location.protocol + '//' + location.hostname + ':' + location.port + '/' + path;
            } else {
                return window.location.protocol + '//' + location.hostname + '/' + path;
            }
        }
    },
};

/**
 * Pagination functions for all page
 */
export const pagination = {
    data() {
        return {
            nextPageUrl: null,
            previousPageUrl: null,
            currentPage: 1,
            pagination: 0,
        };
    },
    methods: {
        /**
         * type : next/previous, fun : data loading function, data : arguments of the data loading function scroll : scroll to top after pagination
         */
        paginate(type, {fun, data = null}, scroll = false) {
            if (type) {
                if (data !== null)
                    fun(this.nextPageUrl, data);
                else
                    fun(this.nextPageUrl);
            } else {
                if (data !== null)
                    fun(this.previousPageUrl, data);
                else
                    fun(this.previousPageUrl);
            }
            if (scroll) {
                $('html, body').animate({scrollTop: 0}, 'fast');
            }
        },
    },
};

/**
 * spinner
 * @type {{computed: {loading(): *}}}
 */
export const spinner = {
    components: {
        spinner: Stretch
    },
    computed: {
        loading() {
            return this.$store.getters.getStatus;
        }
    },
};

export const dashCase = {
    methods: {
        dashCase(value) {
            return kebabCase(value);
        }
    }
};