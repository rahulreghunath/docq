import axios from "axios/index";
import {store} from "../store/store";
import Form from '../shared/form';
import swal from 'sweetalert';


/**
 * Http Request
 * @param type
 * @param url
 * @param data
 * @param config
 * @param form
 * @returns {Promise<any>}
 */
export default function submit({type, url, data = null, config = null, form = false}) {

    /**
     * Setting authoriseation header for all request
     * @type {string}
     */

    axios.defaults.baseURL = 'http://localhost:8000/api/admin';
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.getToken;

    return new Promise((resolve, reject) => {
        /*
        * Axios post request
         */

        store.commit('changeStatus');

        /**
         * If current request is a form submit
         */
        if (type === 'post' && form === true) {
            axios.post(url, data.data(), config)
                .then(response => {

                    if (response.data.status === 'success') {
                        /**
                         * Handle form submit success in form class
                         */
                        data.onSuccess(response.data);

                        /**
                         * Showing status message
                         */
                        showMessage({
                            title: response.data.status === "success" ? "Done" : "Oops!",
                            text: response.data.data.message,
                            icon: response.data.status,
                        });

                        /**
                         * Reset form
                         */
                        data.reset();
                    }

                    /**
                     * Change loading spinner
                     */
                    store.commit('changeStatus');

                    resolve(response);
                }).catch(error => {

                /**
                 * Handling validation errors in form class
                 */
                data.onFail(error.response.data.errors);

                /**
                 * Change loading spinner
                 */
                store.commit('changeStatus');
                reject(error.response);
            });
        } else if (type === 'post') {
            axios.post(url, data, config)
                .then(response => {
                    if (response.data.status === 'success') {
                        /**
                         * Change loading spinner
                         */
                        store.commit('changeStatus');
                        resolve(response);
                    } else {
                        /**
                         * Change loading spinner
                         */
                        store.commit('changeStatus');
                        reject(response.data);
                    }

                }).catch(error => {

                /**
                 * Change loading spinner
                 */
                store.commit('changeStatus');
                reject(error.response);
            });
        }
        else if (type === 'get') {

            if (data !== null) {
                axios.get(url, {
                    params: data
                }, config)
                    .then(response => {
                        if (response.data.status === 'success') {

                            /**
                             * Change loading spinner
                             */
                            store.commit('changeStatus');
                            resolve(response);
                        } else {

                            /**
                             * Change loading spinner
                             */
                            store.commit('changeStatus');
                            reject(response.data);
                        }
                    }).catch(error => {

                    /**
                     * Change loading spinner
                     */
                    store.commit('changeStatus');
                    reject(error.response);
                });
            } else {
                axios.get(url, config)
                    .then(response => {
                        if (response.data.status === 'success') {

                            /**
                             * Change loading spinner
                             */
                            store.commit('changeStatus');
                            resolve(response);
                        } else {
                            /**
                             * Change loading spinner
                             */
                            store.commit('changeStatus');
                            reject(response.data);
                        }
                    }).catch(error => {

                    /**
                     * Change loading spinner
                     */
                    store.commit('changeStatus');
                    reject(error.response);
                });
            }
        }

    });
}

let showMessage = (message) => {
    swal(message);
};