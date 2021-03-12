import { Trending } from './types';
import { instance } from '../api';

export const trendingAPI = {
  async getTrendingMoviesDay(page: number) {
    const response = await instance.get<Trending>(
      `trending/movie/day?page=${page}?language=en`
    );
    return response.data;
  },
};
