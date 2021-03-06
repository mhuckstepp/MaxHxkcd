const express = require("express");
const cors = require("cors");
const db = require("./db-config");
const path = require("path");
require("dotenv").config();
import * as types from "./comics.types";

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/build")));

//eslint-disable-next-line
app.get("/comic/:num", function (req, res, _) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/api/comic/:num", async (req, res, next) => {
  let comicNum = Number(req.params.num);
  let comic: types.DBComic | undefined = await db("comics")
    .where({ num: comicNum })
    .first();
  let comments = await db("comments").where({ num: comicNum });
  if (!comic) {
    res
      .status(404)
      .json({ message: "404 No Comic found with that comic number :/" });
  } else {
    res.status(200).json({ ...comic, comments: comments || [] });
  }
});

app.get("/api/all", async (req, res, next) => {
  db("comics")
    .orderBy("num", "asc")
    .then((comics: types.DBComic[]) => {
      res.json(comics);
    })
    .catch(next);
});

app.post("/api/comic", async (req, res, next) => {
  let comic: types.Comic = req.body;
  await db("comics")
    .insert(comic)
    .then((response) => {
      console.log(response);
      res.json(comic);
    })
    .catch(next);
});

app.post("/api/comment", async (req, res, next) => {
  let comment = req.body;
  await db("comments")
    .insert(comment)
    .then((response) => {
      console.log(response);
      res.status(200).json(comment);
    })
    .catch(next);
});

app.put("/api/comic/:num", async (req, res, next) => {
  const num = req.params.num;
  let favoritesNum = await db("comics")
    .select("comics.favorites")
    .where({ num })
    .first();
  db("comics")
    .update({ favorites: favoritesNum.favorites + 1 })
    .where({ num })
    //eslint-disable-next-line
    .then((_) => {
      res.status(200).json(favoritesNum.favorites + 1);
    })
    .catch(next);
});

//eslint-disable-next-line
app.use("/api", (req, res, next) => {
  res.status(200).json({ api: "up" });
});

//eslint-disable-next-line
app.use("/", (req, res, next) => {
  res
    .status(404)
    .json("404 :/ Sorry - we broke something. Try refreshing the page");
});

//eslint-disable-next-line
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log("listening on", port);
});

module.exports = app;
