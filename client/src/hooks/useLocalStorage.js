import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedVal, setStoredVal] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return initialValue;
  });

  const setMode = (value) => {
    console.log("running setMode");
    console.log("setMode value", value);
    setStoredVal(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedVal, setMode];
}
