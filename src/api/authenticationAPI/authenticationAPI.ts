import { instance } from '../api';
import { CreateSessionResponse, RequestTokenResponse } from './types';

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

    return response.data.session_id;
  },
};
