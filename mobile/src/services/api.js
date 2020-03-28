import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.199:3333' //ip:_utilizada_no_backend
});

export default api;