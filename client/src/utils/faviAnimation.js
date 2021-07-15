import React, { useState, useEffect } from "react";

function FaviAnimation() {
  const [count, setCount] = useState(0);

  const faviElem = document.getElementById("favicon");

  const padNum = (size, number) => {
    let s = String(number);
    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 2) {
        setCount(0);
      } else {
        setCount((count) => count + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    // let num = padNum(2, count);
    faviElem.href = `./faviGifs/favicon (2) ${count}.png`;
  }, [count]);

  return <div></div>;
}

export default FaviAnimation;
