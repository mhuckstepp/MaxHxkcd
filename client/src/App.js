import React, { useEffect } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Comics from "./components/Comics";
import FullComic from "./components/FullComicPage/FullComic";
import GetComicByNumForm from "./components/GetComicByNumForm";
import FilterComics from "./components/FilterComics";
import useDarkMode from "./hooks/useDarkMode";
import DarkModeToggle from "react-dark-mode-toggle";
import { fetchAllComics } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import SortComics from "./components/SortComics";

function App() {
  const [darkOn, setDarkOn] = useDarkMode();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchAllComics());
  }, [dispatch]);

  return (
    <Switch>
      <div className={darkOn ? "container  dark" : "container "}>
        <div className=" flex flex-col justify-start items-center bg-gray-100 dark:bg-gray-700 min-h-screen">
          <div
            className={
              darkOn
                ? "flex justify-between  rounded w-full shadow-xl lg:flex-col bg-gray-500"
                : "flex justify-between  rounded w-full shadow-xl lg:flex-col bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200"
            }
          >
            <div className="flex flex-col justify-between ml-2">
              {location.pathname !== "/" && (
                <Link to="/">
                  <p className="underline md:text-center font-black text-lg">
                    Go Home
                  </p>
                </Link>
              )}
              <div className="flex flex-col align-center text-center ">
                <p>Night Mode</p>
                <DarkModeToggle
                  className="self-center mb-2"
                  onChange={setDarkOn}
                  checked={darkOn}
                  size={40}
                />
                <Route exact path="/" component={SortComics} />
              </div>
            </div>
            <h1 className="text-8xl lg:text-6xl md:text-4xl self-center  ml-24 lg:m-0  ">
              xkcd comics
            </h1>
            <div className=" flex flex-col justify-center md:text-xs	">
              <Route exact path="/" component={FilterComics} />
              <GetComicByNumForm
                length={state.comics[state.comics.length - 1]}
              />
            </div>
          </div>
          <div className="mx-auto  ">
            <Route exact path="/" component={Comics} />
            <Route path="/:num" component={FullComic} />
            {/* <FaviAnimation /> */}
          </div>
        </div>
      </div>
    </Switch>
  );
}

export default App;
