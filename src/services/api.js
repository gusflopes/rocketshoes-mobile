import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.2.2:3333', // Android Studio
  baseURL: 'http://localhost:3333', // Genymotion
});

export default api;
