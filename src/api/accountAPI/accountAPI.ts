import { instance } from '../api';
import {
  MarkFavoriteRequest,
  AccountResponse,
  MarkWatchListRequest,
  PostResponse,
  ListResponse,
} from './types';

export const accountAPI = {
  async markAsFavorite(payload: MarkFavoriteRequest, session_id: string) {
    const response = await instance.post<PostResponse>(
      `account/{account_id}/favorite`,
      payload,
      {
        params: {
          session_id,
        },
      }
    );

    return response.data;
  },

  async getFavoriteList(
    session_id: string,
    media_type: 'movies' | 'tv' = 'movies',
    page: number
  ) {
    const response = await instance.get<ListResponse>(
      `account/{account_id}/favorite/${media_type}`,
      { params: { session_id, page } }
    );

    return response.data;
  },

  async getFavoriteIds(
    session_id: string,
    media_type: 'movies' | 'tv' = 'movies'
  ) {
    const result: Array<number> = [];
    let tp = 1;

    for (let page = 1; page <= tp; page++) {
      const response = await instance.get<ListResponse>(
        `account/{account_id}/favorite/${media_type}`,
        { params: { session_id, page } }
      );

      response.data.results.forEach((elem) => result.push(elem.id));

      tp = response.data.total_pages;
    }

    return result;
  },

  async MarkToWatchList(payload: MarkWatchListRequest, session_id: string) {
    const response = await instance.post<PostResponse>(
      `account/{account_id}/watchlist`,
      payload,
      {
        params: {
          session_id,
        },
      }
    );

    return response.data;
  },

  async getWatchList(
    session_id: string,
    media_type: 'movies' | 'tv' = 'movies',
    page: number
  ) {
    const response = await instance.get<ListResponse>(
      `account/{account_id}/watchlist/${media_type}`,
      { params: { session_id, page } }
    );

    return response.data;
  },

  async getWatchListIds(
    session_id: string,
    media_type: 'movies' | 'tv' = 'movies'
  ) {
    const result: Array<number> = [];
    let tp = 1;

    for (let page = 1; page <= tp; page++) {
      const response = await instance.get<ListResponse>(
        `account/{account_id}/watchlist/${media_type}`,
        { params: { session_id, page } }
      );

      response.data.results.forEach((elem) => result.push(elem.id));

      tp = response.data.total_pages;
    }

    return result;
  },

  async getAccount(session_id: string) {
    const response = await instance.get<AccountResponse>(`account`, {
      params: { session_id },
    });

    return response.data;
  },
};
