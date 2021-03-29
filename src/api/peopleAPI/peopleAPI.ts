import { AxiosError } from 'axios';
import { instance } from '../api';
import { Details, MovieCredits } from './types';

type AxEr = {
  success: boolean,
  status_code: number,
  status_message: string,
};

export const peopleAPI = {
  async getDetail(people_id: number) {
    try {
      const detail = await instance
        .get<Details>(`person/${people_id}`, {
          validateStatus: (status) => (status < 400 ? true : false),
        })
        .then((res) => res.data)
        .catch((error: AxiosError<AxEr>) => {
          if (error.response) {
            throw new Error(error.response.data.status_message);
          } else {
            throw new Error('Unhandled error');
          }
        });

      const movieCredits = await instance
        .get<MovieCredits>(`person/${people_id}/movie_credits`)
        .then((res) => res.data)
        .catch((error: AxiosError<AxEr>) => {
          if (error.response) {
            throw new Error(error.response.data.status_message);
          } else {
            throw new Error('Unhandled error');
          }
        });

      return { detail, movieCredits };
    } catch (error) {
      if (error instanceof Error) return error;
      return null;
    }
  },
};
