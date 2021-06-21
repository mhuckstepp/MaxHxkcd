import React from "react";
import { useFormik } from "formik";
import { postComment } from "./FullComicActions";

const Comments = ({ comments, setComments, num }) => {
  const formik = useFormik({
    initialValues: { poster: "", comment: "" },
    onSubmit: (values) => {
      setComments([...comments, values]);
      postComment({ ...values, num });
    },
  });
  return (
    <div className="flex flex-col mt-2 items-center text-center">
      <p class="font-bold">Add a Comment</p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col mt-2 items-center text-center"
      >
        <label>
          Your Name{"   "}
          <input
            class="focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mx-auto"
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
            class="focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mx-auto"
            value={formik.values.comment}
            onChange={formik.handleChange}
          />
        </label>
        <button
          class="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {" "}
          Submit
        </button>
      </form>
      {comments && <p class="font-bold">Comments:</p>}
      {comments &&
        comments.map((comment) => (
          <div key={comment.comment_id} class="media">
            {comment.poster} - {comment.comment}{" "}
          </div>
        ))}
    </div>
  );
};

export default Comments;
