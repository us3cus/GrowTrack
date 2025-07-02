import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.temirlantenizbayev.ru',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 