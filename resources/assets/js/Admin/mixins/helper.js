/**
 * Helper functions
 */
export default {
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
}