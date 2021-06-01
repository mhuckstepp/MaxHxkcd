// import axios from "axios";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START = "FETCH_START";
export const ADD_COMMENT = "ADD_COMMENT";
export const SEARCH_COMICS = "SEARCH_COMICS";

// export const fetchComics = () => {
//   // assumes a new comic every 3 days and adds the number to potential list
//   let daysElapsed = Math.floor((Date.now() / 86400000 - 18708) / 3);
//   let num = Math.ceil(Math.random() * (2440 + daysElapsed));

//   return (dispatch) => {
//     dispatch({ type: FETCH_START });
//     axios
//       .all([
//         axios.get(`http://xkcd.com/${num}/info.0.json`),
//         axios.get(`http://xkcd.com/${num + 1}/info.0.json`),
//         axios.get(`http://xkcd.com/${num + 2}/info.0.json`),
//         axios.get(`http://xkcd.com/${num + 3}/info.0.json`),
//         axios.get(`http://xkcd.com/${num + 4}/info.0.json`),
//         axios.get(`http://xkcd.com/${num + 5}/info.0.json`),
//         axios.get(`http://xkcd.com/${num + 6}/info.0.json`),
//         axios.get(`http://xkcd.com/${num + 7}/info.0.json`),
//         axios.get(`http://xkcd.com/${num + 8}/info.0.json`),
//       ])
//       .then((res) => {
//         dispatch({
//           type: FETCH_SUCCESS,
//           payload: res.map((obj) => {
//             return {
//               alt: obj.data.alt,
//               img: obj.data.img,
//               num: obj.data.num,
//               title: obj.data.title,
//               comments: [],
//             };
//           }),
//         });
//       })
//       .catch((err) => {
//         dispatch({ type: FETCH_FAIL, payload: err });
//       });
//   };
// };

export const fetchComics = () => {
  return { type: FETCH_SUCCESS };
};

export const addComment = (comment, num) => {
  return { type: ADD_COMMENT, payload: { comment: comment, num: num } };
};

export const searchComics = (search) => {
  return { type: SEARCH_COMICS, payload: search.toLowerCase() };
};
