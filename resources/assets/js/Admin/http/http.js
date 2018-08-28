import axios from "axios/index";
import {store} from "../store/store";

export default function submit({type, url, data = null, config: config = null}) {


    if (config == null) {
        config = {
            headers: {
                Authorization: 'Bearer ' + store.getters.getToken //the token is a variable which holds the token
            }
        };
    } else if (typeof config.headers !== "undefined") {
        config.headers.push({
            Authorization: 'Bearer ' + store.getters.getToken //the token is a variable which holds the token
        });
    } else {
        config.push({
            headers: {
                Authorization: 'Bearer ' + store.getters.getToken //the token is a variable which holds the token
            }
        });
    }

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
            axios.post(url, data, config)
                .then(response => resolve(response))
                .catch(error => reject(error.response));
        }
        else if (type === 'get') {

            if (data !== null) {
                axios.get(url, {
                    params: data
                }, config)
                    .then(response => resolve(response))
                    .catch(error => reject(error.response));
            } else {
                axios.get(url, config)
                    .then(response => resolve(response))
                    .catch(error => reject(error.response));
            }
        }

    });
}