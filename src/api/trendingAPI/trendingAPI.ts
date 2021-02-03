import { Trending } from './types';
import { instance } from '../api';

export const trendingAPI = {
  async getTrendingMoviesDay() {
    const response = await instance.get<Trending>(
      `trending/movie/day?page=3?language=en`
    );
    return response.data;
  },
};
