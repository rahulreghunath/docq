/**
 * Pagination functions for all page
 */
import axios from 'axios';

export default {
    methods: {
        /**
         * Axios http request
         * @param type
         * @param url
         * @param data
         * @param headers
         * @returns {Promise<any>}
         */
        submit({type, url, data = null, headers = null}) {
            alert('rahul');
            if (!url.includes("http")) { // if relative url is given
                if (location.hostname === 'localhost') {
                    url = window.location.protocol + '//' + location.hostname + ':' + location.port + '/' + url;
                } else {
                    url = window.location.protocol + '//' + location.hostname + '/' + url;
                }
            }
            return new Promise((resolve, reject) => {
                /*
                * Axios post request
                 */
                if (type === 'post') {
                    axios.post(url, data, headers)
                        .then(response => resolve(response.data))
                        .catch(error => reject(error.response));
                }
                else if (type === 'get') {

                    if (data !== null) {
                        axios.get(url, {
                            params: data
                        }, headers)
                            .then(response => resolve(response.data))
                            .catch(error => reject(error.response));
                    } else {
                        axios.get(url, headers)
                            .then(response => resolve(response.data))
                            .catch(error => reject(error.response));
                    }
                }

            });
        }
    },
};