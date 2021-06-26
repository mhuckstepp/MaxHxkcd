import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByRecent, sortByRandom, sortByFavorites } from "../actions";

const SortComics = () => {
  const dispatch = useDispatch();
  const [reversed, setReversed] = useState(true);

  const sortRecent = () => {
    dispatch(sortByRecent(reversed));
    setReversed(!reversed);
  };

  const sortFavorites = () => {
    dispatch(sortByFavorites());
  };

  const sortRandom = () => {
    dispatch(sortByRandom());
  };
  return (
    <div className="flex flex-col justify-between">
      <button
        class="inline-block px-3 my-2 text-xs font-sm leading-6 text-center text-white uppercase transition bg-gray-300 dark:bg-gray-700 rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
        onClick={() => sortRecent()}
      >
        {reversed ? "Most Recent" : "Oldest"}
      </button>
      <button
        class="inline-block px-3 my-2 text-xs font-sm leading-6 text-center text-white uppercase transition bg-gray-300 dark:bg-gray-700 rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
        onClick={() => sortFavorites()}
      >
        Most Favorites
      </button>
      <button
        class="inline-block px-3 my-2 text-xs font-sm leading-6 text-center text-white uppercase transition bg-gray-300 dark:bg-gray-700 rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
        onClick={sortRandom}
      >
        Random
      </button>
    </div>
  );
};

export default SortComics;
