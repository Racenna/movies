import { instance } from '../api';
import {
  AccountStatesResponse,
  CastAndCrew,
  ImagesMovie,
  MovieDetail,
  RecommendationsAndSimilarMovie,
  VideosMovie,
  PostResponse,
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

  async getAccountStates(movie_id: number, session_id: string) {
    const response = await instance.get<AccountStatesResponse>(
      `movie/${movie_id}/account_states`,
      { params: { session_id } }
    );

    return response.data;
  },

  async rateMovie(session_id: string, movie_id: number, value: number) {
    const response = await instance.post<PostResponse>(
      `movie/${movie_id}/rating`,
      { value },
      { params: { session_id } }
    );

    return response.data;
  },

  async deleteRating(session_id: string, movie_id: number) {
    const response = await instance.delete<PostResponse>(
      `movie/${movie_id}/rating`,
      {
        params: { session_id },
      }
    );

    return response.data;
  },
};
