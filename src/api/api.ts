import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
  validateStatus: (status) => {
    return status < 500;
  },
});
