import { instance } from '../api';
import { CastAndCrew, ImagesMovie, MovieDetail, VideosMovie } from './types';

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
  async getVideosMovie(movie_id: number) {
    const response = await instance.get<VideosMovie>(
      `movie/${movie_id}/videos?language=en-US`
    );
    return response.data;
  },
  async getImagesMovie(movie_id: number) {
    const response = await instance.get<ImagesMovie>(
      `movie/${movie_id}/images?language=en-US`
    );
    return response.data;
  },
};
