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

app.get("/api/comic/:num", async (req, res, next) => {
  let comicNum = Number(req.params.num)
  let comic = await db.get("comics").find({num: comicNum}).value();
  res.status(200).json(comic);
});

app.get("/api/all", async (req, res, next) => {
  let comics = await db.get("comics").value();
  let comments = await db.get("comments").value()
  res.json({comics, comments});
});

app.get("/api/comments/:num", async (req, res, next) => {
  let comicNum = Number(req.params.num)
  let comments = await db.get("comments").filter({num: comicNum}).value()
  res.json(comments);
});

app.use("/", (req, res, next) => {
  res.json("welcome to xkcd backend API");
});

app.listen(port, () => {
  console.log("running on " + port);
});
