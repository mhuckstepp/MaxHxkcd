export interface Comic {
  comic_id: number;
  num: number;
  month: string;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  extra_parts: number;
  favorites: number;
  comments: {}[];
}

export interface ComicState {
  comics: [];
  isFetching: boolean;
  error: string;
  showedComics: any;
  infScroll: boolean;
  isLoading: boolean;
}

export type ComicsAction = {
  type: string;
  payload?: any;
};
