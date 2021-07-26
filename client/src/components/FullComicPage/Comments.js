import React from "react";
import { useFormik } from "formik";
import { postComment } from "./FullComicActions";

const Comments = ({ comments, setComments, num }) => {
  const formik = useFormik({
    initialValues: { poster: "", comment: "" },
    onSubmit: (values, actions) => {
      setComments([...comments, values]);
      postComment({ ...values, num });
      actions.resetForm({ poster: "", comment: "" });
    },
  });
  console.log(comments);
  return (
    <div className="flex flex-col mt-2 items-center text-center">
      {!!comments.length && <p className="font-bold">Comments:</p>}
      {!!comments.length &&
        comments.map((comment) => (
          <div key={comment.comment_id} className="media">
            {comment.poster} - {comment.comment}{" "}
          </div>
        ))}
      <p className="font-bold mt-4">Add a Comment</p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col mt-2 items-center text-center"
      >
        <label>
          Your Name{"   "}
          <input
            className="focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mx-auto"
            value={formik.values.poster}
            onChange={formik.handleChange}
            name="poster"
            type="text"
          />{" "}
        </label>
        <label className="flex flex-col mt-2 items-center text-center">
          Comment{" "}
          <textarea
            name="comment"
            type="text"
            placeholder="your comment"
            className="focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mx-auto"
            value={formik.values.comment}
            onChange={formik.handleChange}
          />
        </label>
        <button
          className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comments;
