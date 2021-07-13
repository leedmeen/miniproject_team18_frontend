import axios from 'axios';

// Axios config defaults
const instance = axios.create({
  baseURL: 'http://15.165.18.118',
});

export default instance;