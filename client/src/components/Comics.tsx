import React from "react";
import { fetchComics } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Comic from "./Comic";
import InfiniteScroll from "react-infinite-scroll-component";
import { RootState } from "../reducers";

const Comics = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  function fetchMore() {
    dispatch(fetchComics());
  }

  return (
    <div>
      <div className="flex flex-col items-center w-4/5 m-auto md:w-full  ">
        {state.isLoading && (
          <div>
            <div className="block animate-spin ease duration-300 w-10 h-10 mt-20 bg-black mx-2">
              {" "}
            </div>
            <p className="pt-10">LOADING</p>
          </div>
        )}
        {state.error && (
          <div>
            Sorry, something went wrong while trying to load comics. Try
            refreshing the page!
          </div>
        )}

        {state.infScroll ? (
          <InfiniteScroll
            dataLength={state.showedComics.length}
            next={() => fetchMore()}
            hasMore={true}
            loader={<div></div>}
          >
            {state.showedComics.map((comic) => {
              if (comic) {
                return <Comic comic={comic} key={comic.num} />;
              } else {
                return null;
              }
            })}
          </InfiniteScroll>
        ) : (
          <div>
            {state.showedComics.map((comic) => {
              if (comic) {
                return <Comic comic={comic} key={comic.num} />;
              } else {
                return null;
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comics;
