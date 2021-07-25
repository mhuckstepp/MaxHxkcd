import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import db from "./db-config";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/:num", function (req: Request, res: Response, next) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/api/comic/:num", async (req: Request, res: Response, next) => {
  let comicNum = Number(req.params.num);
  let comic = await db("comics").where({ num: comicNum }).first();
  let comments = await db("comments").where({ num: comicNum }).first();
  if (!comic) {
    next({ message: "We couldn't find that comic" });
  } else {
    res.status(200).json({ ...comic, comments: comments || [] });
  }
});

app.get("/api/all", async (req: Request, res: Response, next) => {
  db("comics")
    .orderBy("num", "asc")
    .then((comics: {}[]) => {
      res.json(comics);
    })
    .catch(next);
});

app.post("/api/comic", async (req: Request, res: Response, next) => {
  let comic = req.body;
  await db("comics")
    .insert(comic)
    .then((response) => {
      console.log(response);
      res.json(comic);
    })
    .catch(next);
});

app.post("/api/comment", async (req: Request, res: Response, next) => {
  let comment = req.body;
  await db("comments")
    .insert(comment)
    .then((response) => {
      console.log(response);
      res.status(200).json(comment);
    })
    .catch(next);
});

app.put("/api/comic/:num", async (req: Request, res: Response, next) => {
  const num = req.params.num;
  let favoritesNum = await db("comics")
    .select("comics.favorites")
    .where({ num })
    .first();
  db("comics")
    .update({ favorites: favoritesNum.favorites + 1 })
    .where({ num })
    .then((response) => {
      res.status(200).json(favoritesNum.favorites + 1);
    })
    .catch(next);
});

app.use("/", (req: Request, res: Response, next) => {
  res
    .status(404)
    .json("404 :/ Sorry - we broke something. Try refreshing the page");
});

app.use((err, req, res, next) => {
  console.log("run next");
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
