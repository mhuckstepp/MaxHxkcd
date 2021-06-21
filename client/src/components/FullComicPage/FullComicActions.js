import axios from "axios";

export const url = (path) => {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:5000${path}`
    : path;
};

export const postComment = (comment) => {
  axios
    .post(url("/api/comment"), comment)
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => console.log(err));
};

export const deleteComment = (commentId) => {
  axios
    .delete(url(`/api/comment/${commentId}`))
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => console.log(err));
};

export const pushFavorite = (num) => {
  axios
    .put(url(`/api/comic/${num}`), {
      favorites: 1,
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => console.log(err));
};
