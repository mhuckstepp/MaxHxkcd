import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByRecent, sortByRandom, sortByFavorites } from "../actions";

const SortComics = ({setSearch}) => {
  const dispatch = useDispatch();
  const [ascending, setAscending] = useState(true);

  const sortRecent = () => {
    dispatch(sortByRecent(ascending));
    setAscending(!ascending);
    setSearch('')
  };

  const sortFavorites = () => {
    dispatch(sortByFavorites());
    setSearch('')
  };

  const sortRandom = () => {
    dispatch(sortByRandom());
    setSearch('')
  };

  return (
    <div className="flex flex-col justify-between">
      <button
        className="inline-block px-3 my-2 text-xs font-sm leading-6 text-center text-white uppercase transition bg-gray-300 dark:bg-gray-700 rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
        onClick={sortRecent}
      >
        {ascending ? "Most Recent" : "Oldest"}
      </button>
      <button
        className="inline-block px-3 my-2 text-xs font-sm leading-6 text-center text-white uppercase transition bg-gray-300 dark:bg-gray-700 rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
        onClick={sortFavorites}
      >
        Most Favorites
      </button>
      <button
        className="inline-block px-3 my-2 text-xs font-sm leading-6 text-center text-white uppercase transition bg-gray-300 dark:bg-gray-700 rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
        onClick={sortRandom}
      >
        Random
      </button>
    </div>
  );
};

export default SortComics;
