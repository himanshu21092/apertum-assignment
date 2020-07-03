import axios from "axios";
import { AuthService } from "./authService";

const instance = axios.create({
    baseURL: process.env.REACT_APP_APERTUM_ENDPOINT
})

instance.interceptors.request.use(config => {
    config.headers["Authorization"] = `Bearer ${AuthService.fetchToken()}`;
    return config;
}, (error) => {
    return Promise.reject(error);
})

instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (403 === error.response.status)
        window.location = '/login';

    return Promise.reject(error);
})

export default instance;