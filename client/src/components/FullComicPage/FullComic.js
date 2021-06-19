import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./FullComicActions";

const FullComic = () => {
  let { num } = useParams();
  num = Number(num);
  const comics = useSelector((state) => state.comics);
  const [selectComic, setSelectComic] = useState([{}]);
  let history = useHistory();
  const [comments, setComments] = useState({});

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); //eslint-disable-line

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      history.goBack();
    }
  };

  const handleNext = () => {
    history.push(`/${num + 1}`);
  };

  const handleLast = () => {
    history.push(`/${num - 1}`);
  };

  useEffect(() => {
    if (comics.length) {
      const comic = comics.filter((comic) => Number(comic.num) === num);
      if (comic) {
        setSelectComic(comic);
      } else {
        axios
          .get(url(`/api/comic/${num}`))
          .then((res) => {
            setSelectComic([res.data]);
          })
          .catch((err) => console.log(err));
      }
    } else {
      axios
        .get(url(`/api/comic/${num}`))
        .then((res) => {
          setSelectComic([res.data]);
        })
        .catch((err) => console.log(err));
    }
  }, [num, comics]); //eslint-disable-line

  useEffect(() => {
    axios.get(url(`/api/comments/${num}`)).then((res) => {
      setComments(res.data);
    });
  }, [num]);

  if (!selectComic[0]) {
    return (
      <>
        <div className="flex flex-col mt-12 items-center text-center">
          Sorry we couldn't find a comic with that number. Try hitting previous.
          <div className="flex mt-8 mb-5">
            <button
              className="bg-gradient-to-r mr-12 p-2 from-blue-300 rounded font-bold"
              onClick={() => handleLast()}
            >
              Previous
            </button>
            <button
              className="bg-gradient-to-l ml-10 p-4 pl-10 from-blue-300 rounded font-bold"
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }

  const { title, img, alt } = selectComic[0];
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <div className="flex mt-8 mb-5">
          <button
            className="bg-gradient-to-r mr-12 p-2 from-blue-300 rounded font-bold"
            onClick={() => handleLast()}
          >
            Previous
          </button>
          <button
            className="bg-gradient-to-l ml-10 p-4 pl-10 from-blue-300 rounded font-bold"
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
        <h1 className="text-5xl mb-8 md:text-xl">{title}</h1>
        <img className=" max-h-screen" src={img} alt={alt} />
        <p className="text-2xl mt-12 w-7/12 md:mt-4 md:text-sm">{alt}</p>
        <p className="text-lg my-4 md:text-base"># {num}</p>
        {comments[0] && <p>Comments</p>}
        {comments[0] &&
          comments.map((comment) => (
            <div class="media">
              {comment.poster} - {comment.comment}{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FullComic;
