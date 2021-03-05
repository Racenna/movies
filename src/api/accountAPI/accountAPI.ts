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

  async getRatedList(
    session_id: string,
    media_type: 'movies' | 'tv' = 'movies',
    page: number
  ) {
    const response = await instance.get<ListResponse>(
      `account/{account_id}/rated/${media_type}`,
      { params: { session_id, page } }
    );

    return response.data;
  },

  async getAccount(session_id: string) {
    const response = await instance.get<AccountResponse>(`account`, {
      params: { session_id },
    });

    return response.data;
  },
};
