import { instance } from '../api';
import {
  CreateSessionResponse,
  DeleteSessionResponse,
  RequestTokenResponse,
} from './types';

export const authenticationAPI = {
  async getRequestToken() {
    const response = await instance.get<RequestTokenResponse>(
      `authentication/token/new`
    );

    return response.data.request_token;
  },

  async createNewSession(request_token: string) {
    const response = await instance.post<CreateSessionResponse>(
      `authentication/session/new`,
      {
        request_token,
      }
    );

    return response.data;
  },

  async deleteSession(session_id: string) {
    const response = await instance.delete<DeleteSessionResponse>(
      `authentication/session`,
      {
        data: {
          session_id,
        },
      }
    );

    return response.data.success;
  },
};
