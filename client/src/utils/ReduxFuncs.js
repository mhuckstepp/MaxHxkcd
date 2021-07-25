
export const fourRandos = (comics) => {
  let randOne = Math.ceil(Math.random() * comics.length);
  let randTwo = Math.ceil(Math.random() * comics.length);
  let randThree = Math.ceil(Math.random() * comics.length);
  let randFour = Math.ceil(Math.random() * comics.length);
  let sortRandRes = [
    comics[randOne],
    comics[randTwo],
    comics[randThree],
    comics[randFour],
  ];
  return sortRandRes;
};
