const express = require("express");
const cors = require("cors");
const { getComic } = require("./lib/scraper");
const db = require("./db");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

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
