import { instance } from '../api';
import { CastAndCrew, MovieDetail } from './types';

export const moviesAPI = {
  async getMovieDetail(movie_id: number) {
    const response = await instance.get<MovieDetail>(
      `movie/${movie_id}?language=en-US`
    );
    return response.data;
  },
  async getCastMovie(movie_id: number) {
    const response = await instance.get<CastAndCrew>(
      `movie/${movie_id}/credits?language=en-US`
    );
    return response.data;
  },
};
