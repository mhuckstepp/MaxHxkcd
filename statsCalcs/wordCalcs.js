export const countByWord = (comics) => {
    let counts = {};
    comics.forEach((comic) => {
      words = comic.title
        if (!counts[comic.year]) {
        counts[comic.year] = 1;
      } else {
        counts[comic.year]++;
      }
    });
    return counts;
  };

  console.log(countByWord())