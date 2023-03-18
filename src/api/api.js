import axios from 'axios';

const DEV_URL = 'http://192.168.5.208/';

export const api = axios.create({
    baseURL: DEV_URL,
    timeout: 8000,
    headers: {
        Accept: 'application/json'
    }
});
