import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const GetComicByNumForm = () => {
  let history = useHistory();
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);

  let comicNumEstimate = Math.floor((Date.now() / 86400000 - 18708) / 3);

  const changeHandler = (e) => {
    if (
      e.target.value >= 0 &&
      e.target.value < Math.ceil(2440 + comicNumEstimate)
    ) {
      setNumber(e.target.value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${number}`);
  };

  return (
    <div className=" flex flex-col text-center self-center w-48 lg:m-0 ">
      <p>Jump to comic by #</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          class="focus:ring-indigo-500 focus:border-indigo-500 block text-xl border-gray-300 rounded-md w-3/5 mx-auto"
          type="number"
          name="jumpToNum"
          value={number}
          onChange={changeHandler}
        ></input>

        {error && (
          <p className="text-red-700 text-md">
            {" "}
            # Must be 1 - {Math.ceil(2440 + comicNumEstimate)}
          </p>
        )}
        <button
          class="inline-block px-3 my-2 text-xs font-sm leading-6 text-center text-white uppercase transition bg-gray-300 dark:bg-gray-700 rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
          type="submit"
        >
          Jump
        </button>
      </form>
    </div>
  );
};

export default GetComicByNumForm;
