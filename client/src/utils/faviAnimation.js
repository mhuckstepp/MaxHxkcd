import React, { useState, useEffect } from "react";

function FaviAnimation() {
  const [count, setCount] = useState(0);

  const faviElem = document.getElementById("favi");
  console.log(faviElem.href);

  // const padNum = (size, number) => {
  //   let s = String(number);
  //   while (s.length < (size || 2)) {
  //     s = "0" + s;
  //   }
  //   return s;
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 3) {
        setCount(0);
      } else {
        setCount((count) => count + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    faviElem.href = `%PUBLIC_URL%/favicons/favicon${count}.ico`;
  }, [count, faviElem]);
  return <div></div>;
}

export default FaviAnimation;
