export const countByYear = (comics) => {
  let counts = {};
  comics.forEach((comic) => {
    if (!counts[comic.year]) {
      counts[comic.year] = 1;
    } else {
      counts[comic.year]++;
    }
  });
  return counts;
};
