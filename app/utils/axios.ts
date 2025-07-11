import axios from 'axios';

const api = axios.create({
  baseURL: 'https://temirlantenizbayev.ru',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;