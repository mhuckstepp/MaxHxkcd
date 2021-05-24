const express = require("express");
const cors = require("cors");
const { getComic } = require("./lib/scraper");
const db = require("./db");
const cron = require("./lib/cron"); //eslint-disable-line
const scheduled = require('./lib/scheduled-job') //eslint-disable-line
require("dotenv").config();

const app = express();
app.use(cors());

const port = process.env.PORT;

app.get("/api/comic", async (req, res, next) => {
  let comic = await getComic("http://xkcd.com/info.0.json");
  res.status(200).json(comic);
});

app.get("/api/all", async (req, res, next) => {
  let comics = await db.get("comics").value();
  res.json(comics);
});

app.use("/", (req, res, next) => {
  res.json("welcome to xkcd backend API");
});

app.listen(port, () => {
  console.log("running on " + port);
});
