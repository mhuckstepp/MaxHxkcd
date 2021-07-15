import React from "react";
import { Link } from "react-router-dom";

type ComicType = {
        comic_id: string,
        num: number,
        month: string,
        link: string,
        year: string,
        news: string,
        safe_title: string,
        transcript: string,
        alt: string,
        img: string,
        title: string,
        day: string,
        extra_parts?: any,
        favorites: number
}

type ComicProps = {
  comic: ComicType;
};

const Comic = ({comic}: ComicProps) => {
  return (
    <div>
      <Link to={`/comic/${comic.num}`}>
        <div className=" rounded bg-white shadow m-8 p-8 flex flex-col items-center text-center max-w-screen-xl dark:bg-gray-400">
          <h2 className="text-4xl mb-8 md:text-lg m-0">{comic.title}</h2>
          <p className="text-l mb-4"># {comic.num}</p>
          <img className="mb-4" src={comic.img} alt={comic.alt} />
          <p className="text-xl m-4 md:text-xs">{comic.alt}</p>
        </div>
      </Link>
    </div>
  );
};

export default Comic;
