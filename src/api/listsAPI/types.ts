export type ListDetail = {
  created_by: string,
  description: string,
  favorite_count: number,
  id: string,
  items: Array<ListItem>,
  item_count: number,
  iso_639_1: string,
  name: string,
  poster_path: string | null,
};

export type ItemStatus = {
  id: string,
  item_present: boolean,
};

export type CreateListResponse = {
  status_message: string,
  success: boolean,
  status_code: number,
  list_id: number,
};

export type ListItem = {
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

export type DefaultResponse = {
  success: boolean,
  status_code: number,
  status_message: string,
};
