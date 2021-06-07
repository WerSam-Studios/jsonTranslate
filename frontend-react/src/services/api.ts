import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials':true,
    }
});

export default api;