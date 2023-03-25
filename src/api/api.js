import axios from 'axios';

const DEV_URL = 'https://localhost:7297/';

export const api = axios.create({
    baseURL: DEV_URL,
    timeout: 8000,
    headers: {
        Accept: 'application/json'
    }
});
