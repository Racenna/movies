import { instance } from '../api';
import {
  CreateListResponse,
  ItemStatus,
  ListDetailType,
  DefaultResponse,
} from './types';

export const listsAPI = {
  async getDetails(list_id: string | number) {
    const response = await instance.get<ListDetailType & DefaultResponse>(
      `list/${list_id}`
    );

    return response.data;
  },

  async checkItemStatus(list_id: string | number, movie_id: number) {
    const response = await instance.get<ItemStatus>(
      `list/${list_id}/item_status`,
      {
        params: { movie_id },
      }
    );

    return response.data;
  },

  async createList(
    session_id: string,
    name: string,
    description: string,
    language: string
  ) {
    const response = await instance.post<CreateListResponse>(
      `list`,
      {
        name,
        description,
        language,
      },
      {
        params: {
          session_id,
        },
      }
    );

    return response.data;
  },

  async addMovie(
    list_id: string | number,
    media_id: number,
    session_id: string
  ) {
    const response = await instance.post<DefaultResponse>(
      `list/${list_id}/add_item`,
      {
        media_id,
      },
      {
        params: {
          session_id,
        },
      }
    );

    return response.data;
  },

  async removeMovie(
    list_id: string | number,
    session_id: string,
    media_id: number
  ) {
    const response = await instance.post<DefaultResponse>(
      `list/${list_id}/remove_item`,
      {
        media_id,
      },
      {
        params: {
          session_id,
        },
      }
    );

    return response.data;
  },

  async clearList(list_id: string, session_id: string, confirm: boolean) {
    const response = await instance.post<DefaultResponse>(
      `list/${list_id}/clear`,
      null,
      {
        params: {
          session_id,
          confirm,
        },
      }
    );

    return response.data;
  },

  async deleteList(list_id: string, session_id: string) {
    const response = await instance.delete<DefaultResponse>(`list/${list_id}`, {
      params: {
        session_id,
      },
      validateStatus: (status) => {
        if (status < 500 || status === 500) return true;
        return false;
      },
    });

    return response.data;
  },
};
