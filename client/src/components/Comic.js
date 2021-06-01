import React from "react";
import { Link } from "react-router-dom";

const Comic = (props) => {
  const { comic } = props;

  return (
    <div>
      <Link to={`/${comic.num}`}>
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
