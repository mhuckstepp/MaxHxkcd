const { default: axios } = require("axios");

axios.get('https://maxhxkcd.herokuapp.com/api/all').then((resp) => {
  const titleWords = {}
  resp.data.forEach((comic) => {
    let words = comic.title.split(' ');
    for (const word of words) {
      let lowerWord = word.toLowerCase()
      if (!titleWords[lowerWord]) {
        titleWords[lowerWord] = 1;
      } else {
        titleWords[lowerWord]++;
      }
  }
  })
  const sortedWords = Object.entries(titleWords).sort(([,a],[,b]) => b-a)
  console.log(sortedWords.slice(0, 150))
}).catch(err => console.log(err))

// const countByWord = (comics) => {
//     let counts = {};
          // let words = comic.title
          //   if (!counts[comic.year]) {
          //   counts[comic.year] = 1;
          // } else {
          //   counts[comic.year]++;
          // }
      //   });
      //   return counts;
      // };

