import axios from 'axios';
export default class Axios {
    /**
     * Axios http request
     * @param type
     * @param url
     * @param data
     * @returns {Promise<any>}
     */
    submit(type, url, data = null) {

        if (!url.includes("http")) { // if relative url is given
            if (location.hostname === 'localhost') {
                url = window.location.protocol + '//' + location.hostname + '/workspace/public/' + url;
            } else {
                url = window.location.protocol + '//' + location.hostname + '/' + url;
            }
        }
        return new Promise((resolve, reject) => {
            /*
            * Axios post request
             */
            if (type === 'post') {
                axios.post(url, data)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data));
            }
            else if (type === 'get') {

                if (data !== null) {
                    axios.get(url, {
                        params: data
                    })
                        .then(response => resolve(response.data))
                        .catch(error => reject(error.response.data));
                } else {
                    axios.get(url)
                        .then(response => resolve(response.data))
                        .catch(error => reject(error.response.data));
                }
            }

        });
    }
}