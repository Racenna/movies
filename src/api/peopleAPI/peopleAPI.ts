import { instance } from '../api';
import { Details } from './types';

export const peopleAPI = {
  async getDetail(people_id: number) {
    try {
      const response = await instance.get<Details>(`person/${people_id}`, {
        validateStatus: (status) => (status < 400 ? true : false),
      });

      return response.data;
    } catch (error) {
      if (error.response) return error.response.data;
      return;
    }
  },
};
