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

let excludeWords = ["the", "and", "for", "not", "you", "i'm"];
export const countByWords = (comics) => {
  const titleWords = {};
  comics.forEach((comic) => {
    let words = comic.title.split(" ");
    for (const word of words) {
      let lowerWord = word.toLowerCase();
      if (word.length < 3 || excludeWords.includes(lowerWord)) {
        continue;
      }
      if (!titleWords[lowerWord]) {
        titleWords[lowerWord] = 1;
      } else {
        titleWords[lowerWord]++;
      }
    }
  });
  const sortedWords = Object.entries(titleWords).sort(([, a], [, b]) => b - a);
  return sortedWords.slice(0, 100);
};

export const lengthByMonth = (comics) => {
  const altCounts = Array(12)
    .fill(null)
    .map(() => [0, 0]);
  comics.forEach((comic) => {
    let month = Number(comic.month) - 1;
    let wordNums = comic.alt.split(" ").length;
    altCounts[month][0] += 1;
    altCounts[month][1] += wordNums;
  });
  return altCounts;
};
