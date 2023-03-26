import axios from "axios";

const DEV_URL = "https://localhost:7297/";
const DEV_URL2 = "http://192.168.5.206/";

export const api = axios.create({
  baseURL: DEV_URL2,
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
