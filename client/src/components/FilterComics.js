import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchComics, fetchComics } from "../actions";

const FilterComics = () => {
  const { showedComics } = useSelector((state) => state);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const dispatch = useDispatch();

  const changeHandler = async (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length > 2) {
      dispatch(searchComics(search));
      setSearched(true);
      if (showedComics.length === 0) {
        setSearchError(true);
      } else {
        setSearchError(false);
      }
    } else if (search.length < 3 && searched) {
      dispatch(fetchComics());
      setSearched(false);
      if (showedComics.length === 0) {
        setSearchError(true);
      } else {
        setSearchError(false);
      }
    }
  }, [search, dispatch, searched, showedComics.length]);

  return (
    <div className=" flex flex-col items-center w-48 self-center  lg:m-0">
      <p>Search Comic by Title</p>
      <input
        className="focus:ring-indigo-500 focus:border-indigo-500 block text-xl border-gray-300 rounded-md w-3/5 mx-auto"
        type="text"
        name="jumpToNum"
        value={search}
        onChange={changeHandler}
      ></input>
      {searchError && (
        <p className="text-red-700 text-md">No comics include that</p>
      )}
    </div>
  );
};

export default FilterComics;
