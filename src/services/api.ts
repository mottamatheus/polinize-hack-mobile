import axios from 'axios';

const api = axios.create({
  baseURL: 'http://lolcahost:3333',
});

export default api;
