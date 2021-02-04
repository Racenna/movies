import { instance } from '../api';
import {
  CastAndCrew,
  ImagesMovie,
  MovieDetail,
  RecommendationsAndSimilarMovie,
  VideosMovie,
} from './types';

export const moviesAPI = {
  async getMovieDetail(movie_id: number) {
    const response = await instance.get<MovieDetail>(
      `movie/${movie_id}?language=en`
    );
    return response.data;
  },
  async getCastMovie(movie_id: number) {
    const response = await instance.get<CastAndCrew>(
      `movie/${movie_id}/credits?language=en`
    );
    return response.data;
  },
  async getVideosMovie(movie_id: number) {
    const response = await instance.get<VideosMovie>(
      `movie/${movie_id}/videos?language=en`
    );
    return response.data;
  },
  async getImagesMovie(movie_id: number) {
    const response = await instance.get<ImagesMovie>(
      `movie/${movie_id}/images?language=en`
    );
    return [...response.data.posters, ...response.data.backdrops];
  },
  async getRecommendedMovies(movie_id: number) {
    const response = await instance.get<RecommendationsAndSimilarMovie>(
      `movie/${movie_id}/recommendations?language=en`
    );
    return response.data.results;
  },
  async getSimilarMovies(movie_id: number) {
    const response = await instance.get<RecommendationsAndSimilarMovie>(
      `movie/${movie_id}/similar?language=en`
    );
    return response.data.results;
  },
};
