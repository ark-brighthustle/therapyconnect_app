import axios from "axios";
import config from "../../config";
import auth from "../../utils/auth";

const Axios = axios.create({
    baseURL: config.BASE_URL,
});


Axios.interceptors.request.use(async (config) => {
    try {
        const token = auth.getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
    } catch (e) {
        console.error(e)
    }
    config.Accept = 'application/json';
    config['Content-Type'] = 'application/json';
    return config;
})

Axios.interceptors.response.use(
    res => res,
    err => {
        if (err && err.response && err.response.status === 404) {
            window.location.href = '/'
        }
        throw err && err.response && err.response.data;
    }
);


export default Axios