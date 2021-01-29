export type MovieDetail = {
  adult: boolean,
  backdrop_path: string | null,
  genres: Array<Genre>,
  id: number,
  original_language: string,
  original_title: string,
  overview: string | null,
  popularity: number,
  poster_path: string | null,
  release_date: string,
  runtime: number | null,
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
};

type Genre = {
  id: number,
  name: string,
};
