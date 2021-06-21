import React from "react";
import { useDispatch } from "react-redux";
import { sortByRecent, sortByNewest } from "../actions";

const SortComics = () => {
  const dispatch = useDispatch();

  const sortRecent = () => {
    dispatch(sortByRecent());
  };

  const sortNewest = () => {
    dispatch(sortByNewest());
  };

  const sortFavorites = (method) => {
    dispatch(sortByRecent());
  };
  return (
    <div className="flex flex-col justify-between">
      <button
        class="inline-block px-3 my-2 text-xs font-sm leading-6 text-center text-white uppercase transition bg-gray-300 dark:bg-gray-700 rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
        onClick={sortRecent}
      >
        Most Recent
      </button>
      <button
        class="inline-block px-3 my-2 text-xs font-sm leading-6 text-center text-white uppercase transition bg-gray-300 dark:bg-gray-700 rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
        onClick={sortNewest}
      >
        Oldest
      </button>
    </div>
  );
};

export default SortComics;
