import { instance } from '../api';
import {
  CastAndCrew,
  ImagesMovie,
  MovieDetail,
  RecommendationsAndSimilarMovie,
  VideosMovie,
} from './types';

export const moviesAPI = {
  async getAllMovieDetail(movie_id: number) {
    const detail = await instance
      .get<MovieDetail>(`movie/${movie_id}?language=en`)
      .then((res) => res.data);
    const castAndCrew = await instance
      .get<CastAndCrew>(`movie/${movie_id}/credits?language=en`)
      .then((res) => res.data);
    const videos = await instance
      .get<VideosMovie>(`movie/${movie_id}/videos?language=en`)
      .then((res) => res.data);
    const images = await instance
      .get<ImagesMovie>(`movie/${movie_id}/images?language=en`)
      .then((res) => [...res.data.posters, ...res.data.backdrops]);
    const recommendations = await instance
      .get<RecommendationsAndSimilarMovie>(
        `movie/${movie_id}/recommendations?language=en`
      )
      .then((res) => res.data.results);
    const similar = await instance
      .get<RecommendationsAndSimilarMovie>(
        `movie/${movie_id}/similar?language=en`
      )
      .then((res) => res.data.results);

    return {
      detail,
      castAndCrew,
      videos,
      images,
      recommendations,
      similar,
    };
  },
};
