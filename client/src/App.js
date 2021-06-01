import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Comics from "./components/Comics";
import FullComic from "./components/FullComic";
import GetComicByNumForm from "./components/GetComicByNumForm";
import FilterComics from "./components/FilterComics";
import useDarkMode from "./hooks/useDarkMode";
import DarkModeToggle from "react-dark-mode-toggle";
import { fetchAllComics } from "./actions";
import { useDispatch } from 'react-redux'


function App() {
  const [darkOn, setDarkOn] = useDarkMode();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllComics())
  }, [dispatch])
  return (
    
    <Router>
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
                <Link to="/">
                  <p className="underline md:text-center font-black text-lg">
                    Go Home
                  </p>
                </Link>
                <div className="flex flex-col align-center text-center ">
                  <p>Night Mode</p>
                  <DarkModeToggle
                    className="self-center mb-2"
                    onChange={setDarkOn}
                    checked={darkOn}
                    size={40}
                  />
                </div>
              </div>
              <h1 className="text-8xl lg:text-6xl md:text-4xl self-center  ml-24 lg:m-0  ">
                xkcd comics
              </h1>
              <div className=" flex flex-col justify-center md:text-xs	">
                <Route exact path="/" component={FilterComics} />
                <GetComicByNumForm />
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
    </Router>
  );
}

export default App;
