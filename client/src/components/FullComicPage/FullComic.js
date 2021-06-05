import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import {url, } from './FullComicActions'

const FullComic = () => {
  let { num } = useParams();
  num = Number(num);
  const comics = useSelector((state) => state.comics);
  const [selectComic, setSelectComic] = useState([{}]);
  let history = useHistory();
  const [comments, setComments] = useState({});

  const handleNext = () => {
    history.push(`/${num + 1}`);
  };

  const handleLast = () => {
    history.push(`/${num - 1}`);
  };

  useEffect(() => {
    if (comics.length){
    setSelectComic(comics.filter((comic) => Number(comic.num) === num));
    }
    else {
      axios
      .get(url(`/api/comic/${num}`))
      .then((res) => {
        setSelectComic([res.data])
      })
    }
  }, [num, comics]);
  

  
  useEffect(() => {
    axios
      .get(url(`/api/comments/${num}`))
      .then((res) => {
        setComments(res.data)
      })
  }, [num])

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

        {comments.length &&
          comments.map((comment) => (
            <div class="media">{comment.poster} - {comment.comment} </div>
          ))}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "30%",
          }}
          class="columns"
        >
          {/* <textarea
            class="textarea is-small"
            style={{
              width: "30%",
              margin: "30px auto 10px",
              textAlign: "center",
            }}
            name="comment"
            placeholder="add your own caption"
            type="text"
            onChange={handleChange}
            value={comment}
          ></textarea>

          <button
            class="button is-small is-info"
            style={{
              width: "40%",
              padding: "2%",
              margin: "10px",
            }}
            type="submit"
            onClick={() => handleSubmit(comment, num)}
          >
            Add your own caption!
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FullComic;
