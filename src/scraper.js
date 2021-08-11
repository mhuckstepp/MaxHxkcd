const axios = require("axios");
const db = require("db-config");

async function getComic(url) {
  const { data } = await axios.get(url);
  return data;
}

async function getLatest() {
  let comic = await getComic("http://xkcd.com/info.0.json");
  db("comics")
    .insert(comic)
    .then((resp) => {
      console.log("resolved", resp);
    })
    .catch((err) => console.log(err));
}

getLatest();
