import React from "react";
import { fetchComics } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Comic from "./Comic";
import InfiniteScroll from "react-infinite-scroll-component";

const Comics = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function fetchMore() {
    dispatch(fetchComics());
  }

  return (
    <div>
      <div className="flex flex-col items-center w-4/5 m-auto md:w-full  ">
        {state.isLoading && (
          <div>
            <div class="block animate-spin ease duration-300 w-10 h-10 mt-20 bg-black mx-2">
              {" "}
            </div>
            <p class="pt-10">LOADING</p>
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
