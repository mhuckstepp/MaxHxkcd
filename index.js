const express = require("express");
const cors = require("cors");
const db = require("./db-config");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/:num", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const port = process.env.PORT;

app.get("/api/comic/:num", async (req, res, next) => {
  let comicNum = Number(req.params.num);
  let [comic] = await db("comics").where({ num: comicNum });
  let comments = await db("comments").where({ num: comicNum });
  res.status(200).json({ ...comic, comments: comments });
});

app.get("/api/comments/:num", async (req, res, next) => {
  let comicNum = Number(req.params.num);
  let comments = await db("comments").where({ num: comicNum });
  res.json(comments);
});

app.get("/api/all", async (req, res, next) => {
  let comics = await db("comics").orderBy("num", "asc");
  res.json(comics);
});

app.post("/api/comic", async (req, res, next) => {
  let comic = req.body;
  console.log(comic);
  let insert = await db("comics")
    .insert(comic)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
  res.json(comic);
});

app.use("/", (req, res, next) => {
  res.json("Sorry - we broke something.");
});

app.listen(port, () => {
  console.log("listening on", port);
});

module.exports = app;
