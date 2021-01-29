import axios from 'axios';
import { Trending } from './types';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export const trendingAPI = {
  async getTrendingMoviesDay() {
    const response = await instance.get<Trending>(`trending/movie/day?page=1`);
    return response.data;
  },
};
