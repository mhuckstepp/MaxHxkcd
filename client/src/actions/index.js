import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START = "FETCH_START";
export const ADD_COMMENT = "ADD_COMMENT";
export const SEARCH_COMICS = "SEARCH_COMICS";
export const FETCH_ALL_SUCCESS = "FETCH_ALL_SUCCESS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const SORT_COMICS_RECENT = "SORT_COMICS_RECENT";
export const SORT_COMICS_FAVORITES = "SORT_COMICS_FAVORITES";
export const SORT_COMICS_RANDOM = "SORT_COMICS_RANDOM";

function url(path) {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:5000${path}`
    : path;
}

export const fetchAllComics = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get(url("/api/all"))
      .then((res) => {
        dispatch({
          type: FETCH_ALL_SUCCESS,
          payload: res.data,
        });
        dispatch({ type: FETCH_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: FETCH_FAIL, payload: err });
      });
  };
};

export const fetchComics = () => {
  return { type: FETCH_SUCCESS };
};

export const addComment = (comment, num) => {
  return { type: ADD_COMMENT, payload: { comment: comment, num: num } };
};

export const searchComics = (search) => {
  return { type: SEARCH_COMICS, payload: search.toLowerCase() };
};

export const sortByRecent = () => {
  return { type: SORT_COMICS_RECENT };
};

export const sortByFavorites = () => {
  return { type: SORT_COMICS_FAVORITES };
};

export const sortByRandom = () => {
  return { type: SORT_COMICS_RANDOM };
};
