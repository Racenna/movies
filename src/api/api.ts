import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export type PopularMoviesResult = {
  poster_path: string | null,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: Array<number>,
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string | null,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number,
};

type PopularMovies = {
  page: number,
  total_results: number,
  total_pages: number,
  results: PopularMoviesResult[],
};

export const movieAPI = {
  getPopularMovies() {
    return instance
      .get<PopularMovies>(`movie/popular?language=en-US&page=21`)
      .then((response) => response.data);
  },
};
