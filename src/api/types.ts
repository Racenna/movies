export type TrendingResults = {
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

export type Trending = {
  page: number,
  total_results: number,
  total_pages: number,
  results: Array<TrendingResults>,
};
