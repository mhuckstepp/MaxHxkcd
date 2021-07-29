import React, { useState, useEffect } from "react";

function FaviAnimation() {
  const [count, setCount] = useState(0);

  const faviElem = document.getElementById("favi");

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
    faviElem.href = `/favicons/favicon${count}.ico`;
  }, [count, faviElem]);
  return <div></div>;
}

export default FaviAnimation;
