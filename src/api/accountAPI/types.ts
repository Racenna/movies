export type MarkFavoriteResponse = {
  status_code: number,
  status_message: string,
};

export type FavoriteListResponse = {
  page: number,
  results: Array<{
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
  }>,
  total_pages: number,
  total_results: number,
};

export type MarkFavoriteRequest = {
  media_type: 'movie' | 'tv',
  media_id: number,
  favorite: boolean,
};
