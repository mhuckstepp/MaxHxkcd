import {
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_START,
  ADD_COMMENT,
  SEARCH_COMICS,
  FETCH_ALL_SUCCESS,
  SORT_COMICS_RECENT,
  SORT_COMICS_RANDOM,
  SORT_COMICS_FAVORITES,
} from "../actions";
import { fourRandos } from "../utils/ReduxFuncs";

const initialState = {
  comics: [],
  isFetching: false,
  error: "",
  showedComics: [],
  infScroll: true,
  isLoading: true,
};

export const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        comics: action.payload,
        isLoading: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        showedComics: [...state.showedComics, ...fourRandos(state.comics)],
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SEARCH_COMICS:
      return {
        ...state,
        showedComics: [...state.comics]
          .filter((comic) => {
            return (comic.title.toLowerCase().includes(action.payload) || 
            comic.alt.toLowerCase().includes(action.payload) ||
            comic.transcript.toLowerCase().includes(action.payload)
            )
          })
          .slice(0, 50),
        infScroll: false,
      };
    case SORT_COMICS_RECENT:
      if (!action.payload) {
        return {
          ...state,
          showedComics: [...state.comics].sort().slice(0, 50),
          infScroll: false,
        };
      } else {
        return {
          ...state,
          showedComics: [...state.comics].sort().reverse().slice(0, 50),
          infScroll: false,
        };
      }
    case SORT_COMICS_RANDOM:
      return {
        ...state,
        showedComics: fourRandos(state.comics),
        infScroll: true,
      };
    case SORT_COMICS_FAVORITES:
      return {
        ...state,
        showedComics: [...state.comics]
          .sort((a, b) => (a.favorites <= b.favorites ? 1 : -1))
          .slice(0, 50),
        infScroll: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comics: state.comics.map((comic) => {
          if (Number(comic.num) === Number(action.payload.num)) {
            return {
              ...comic,
              comments: [...comic.comments, action.payload.comment],
            };
          } else {
            return comic;
          }
        }),
      };
    default:
      return state;
  }
};

