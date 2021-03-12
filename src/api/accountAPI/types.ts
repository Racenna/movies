export type PostResponse = {
  success: boolean,
  status_code: number,
  status_message: string,
};

export type ListResponse = {
  page: number,
  results: Array<Movie>,
  total_pages: number,
  total_results: number,
};

export type Movie = {
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
  rating?: number,
};

export type CreatedListResponse = {
  page: number,
  results: Array<CustomList>,
  total_pages: number,
  total_results: number,
};

export type CustomList = {
  description: string,
  favorite_count: number,
  id: number,
  item_count: number,
  iso_639_1: string,
  list_type: string,
  name: string,
  poster_path: string | null,
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

export type MarkWatchListRequest = {
  media_type: 'movie' | 'tv',
  media_id: number,
  watchlist: boolean,
};
