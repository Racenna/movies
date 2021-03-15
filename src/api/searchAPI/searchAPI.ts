import axios, { CancelTokenSource } from 'axios';
import { instance } from '../api';
import { SearchMovieResponse } from './types';

let cancelToken: CancelTokenSource;

export const searchAPI = {
  async searchMovies(query: string, page: number) {
    if (!query.trim()) return;
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel('Operation canceled due to new request.');
    }

    cancelToken = axios.CancelToken.source();

    try {
      const response = await instance.get<SearchMovieResponse>(`search/movie`, {
        params: { query: query.trim(), page },
        cancelToken: cancelToken.token,
      });

      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) return;
      return error;
    }
  },
};
