import express from 'express'
import cors from 'cors'
import { getComic } from './lib/scraper'
import db from './db'
import './lib/cron'

const app = express()
app.use(cors())

app.get('/api/comic', async (req, res, next) => {
    let comic = await getComic('http://xkcd.com/info.0.json')
    res.status(200).json(comic)
})

app.get('/api/all', async (req, res, next) => {
    let comics = await db.get('comics').value()
    res.json(comics)
})


app.use('/', (req, res, next) => {
    res.json('welcome to xkcd backend API')
})

app.listen(2055, () => {
    console.log("running on 2055");
})