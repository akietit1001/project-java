import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://db18-222-253-162-85.ap.ngrok.io',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*',
    },
    // paramsSerializer: params => queryString.stringify(params),
})

// Add a request interceptor
axiosClient.interceptors.request.use(
    async function(config) {
        // Do something before request is sent
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            config.headers.AUTH_TOKEN = `${token}`;
        }
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    });

// Add a response interceptor
axiosClient.interceptors.response.use(function(response) {
    if (response && response.data) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    }
    return response;
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosClient;