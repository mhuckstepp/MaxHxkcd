import {
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_START,
  ADD_COMMENT,
  SEARCH_COMICS,
  FETCH_ALL_SUCCESS,
} from "../actions";


const initialState = {
  comics: {},
  isFetching: false,
  err: "",
  showedComics: [
  ],
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
      }
      case FETCH_SUCCESS:
      let randOne = Math.ceil(Math.random() * state.comics.length);
      let randTwo = Math.ceil(Math.random() * state.comics.length);
      let randThree = Math.ceil(Math.random() * state.comics.length);
      let randFour = Math.ceil(Math.random() * state.comics.length);
      let res = [
        state.comics[randOne],
        state.comics[randTwo],
        state.comics[randThree],
        state.comics[randFour],
      ];
      return {
        ...state,
        showedComics: [...state.showedComics, ...res],
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
        showedComics: state.comics.filter((comic) => {
          return comic.title.toLowerCase().includes(action.payload);
        }),
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
