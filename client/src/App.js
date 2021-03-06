import React, { useEffect, useState } from "react";
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
import Charts from "./components/Charts/Charts";
import FaviAnimation from "./utils/faviAnimation";

function App() {
  const [darkOn, setDarkOn] = useDarkMode();
  const [search, setSearch] = useState("");
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
                ? "flex justify-between  rounded w-full shadow-xl lg:flex-col bg-gray-500  "
                : "  flex justify-between  rounded w-full shadow-xl lg:flex-col bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200"
            }
          >
            <div className="flex flex-col justify-between mx-8">
              {location.pathname !== "/" && (
                <Link to="/">
                  <p className="underline mx-8 font-black align-center text-center text-lg">
                    Go Home
                  </p>
                </Link>
              )}
              <div className="flex flex-col align-center text-center ">
                <p className=" mx-8 align-center text-center ">Night Mode</p>
                <DarkModeToggle
                  className="self-center mb-2"
                  onChange={setDarkOn}
                  checked={darkOn}
                  size={40}
                />
                <Route exact path="/">
                  <SortComics setSearch={setSearch} />
                </Route>
              </div>
            </div>

            <div className="flex flex-col items-center">
              {location.pathname !== "/stats" && (
                <Link className="text-xs self-center mb-4 " to="/stats">
                  Stats
                </Link>
              )}
              <h1 className="text-8xl lg:text-6xl md:text-4xl self-center">
                xkcd comics
              </h1>
            </div>
            <div className=" flex flex-col justify-center md:text-xs	">
              <Route exact path="/">
                <FilterComics search={search} setSearch={setSearch} />
              </Route>
              <GetComicByNumForm
                length={state.comics[state.comics.length - 1]}
              />
            </div>
          </div>
          <div className="mx-auto  ">
            <Route exact path="/" component={Comics} />
            <Route exact path="/comic/:num" component={FullComic} />
            <FaviAnimation />
          </div>
          <Route exact path="/stats" component={Charts} />
        </div>
      </div>
    </Switch>
  );
}

export default App;
