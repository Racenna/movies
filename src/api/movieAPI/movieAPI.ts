import { instance } from '../api';
import { MovieDetail } from './types';

export const moviesAPI = {
  async getMovieDetail(movie_id: number) {
    const response = await instance.get<MovieDetail>(
      `movie/${movie_id}?language=en-US`
    );
    return response.data;
  },
};
