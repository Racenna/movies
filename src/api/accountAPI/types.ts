export type MarkFavoriteResponse = {
  status_code: number,
  status_message: string,
};

export type FavoriteListResponse = {
  page: number,
  results: Array<FavoriteMovie>,
  total_pages: number,
  total_results: number,
};

export type FavoriteMovie = {
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

export type AccountResponse = {
  avatar: Avatar,
  id: number,
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  include_adult: boolean,
  username: string,
};

type Avatar = {
  gravatar: {
    hash: string,
  },
  tmdb: {
    avatar_path: string | null,
  },
};

export type MarkFavoriteRequest = {
  media_type: 'movie' | 'tv',
  media_id: number,
  favorite: boolean,
};
