import axios from 'axios';

// Axios config defaults
const instance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 1000,
});

export default instance;