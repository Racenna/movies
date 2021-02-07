export type MovieDetail = {
  adult: boolean,
  backdrop_path: string | null,
  belongs_to_collection: {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
  } | null,
  budget: number,
  genres: Array<Genre>,
  homepage: string | null,
  id: number,
  imdb_id: string | null,
  original_language: string,
  original_title: string,
  overview: string | null,
  popularity: number,
  poster_path: string | null,
  production_companies: Array<{
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string,
  }>,
  production_countries: Array<{
    iso_3166_1: string,
    name: string,
  }>,
  release_date: string,
  revenue: number,
  runtime: number | null,
  spoken_languages: Array<{
    iso_639_1: string,
    name: string,
  }>,
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
};

export type Genre = {
  id: number,
  name: string,
};

export type CastAndCrew = {
  id: number,
  cast: Array<Cast>,
  crew: Array<Crew>,
};

export type Cast = {
  adult: boolean,
  gender: number | null,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string | null,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number,
};

export type Crew = {
  adult: boolean,
  gender: number | null,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string | null,
  credit_id: number,
  department: string,
  job: string,
};

export type VideosMovie = {
  id: number,
  results: Array<VideoType>,
};

export type VideoType = {
  id: string,
  iso_639_1: string,
  iso_3166_1: string,
  key: string,
  name: string,
  site: string,
  size: string,
  type: string,
};

export type ImagesMovie = {
  id: number,
  backdrops: Array<ImageType>,
  posters: Array<ImageType>,
};

export type ImageType = {
  aspect_ratio: number,
  file_path: string,
  height: number,
  iso_639_1: string | null,
  vote_average: number,
  vote_count: number,
  width: number,
};

export type RecommendationsAndSimilarMovie = {
  page: number,
  results: Array<RecommendationsAndSimilarResult>,
  total_pages: number,
  total_results: number,
};

export type RecommendationsAndSimilarResult = {
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
