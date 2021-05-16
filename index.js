import express from 'express'
import cors from 'cors'
import {getComic, runCron} from './lib/scraper'
import db from './db'
import './lib/cron'
import {jsonObjAll} from './lib/seedData'

const app = express()
app.use(cors())

// console.log(db)
app.get('/api/comic', async (req, res, next) => {
    let comic = await getComic('http://xkcd.com/info.0.json')
    let found = await db.get('comics').find({num: 2465}).value()
    res.json({jsonObjAll})
})

app.get('/api/all', async (req, res, next) => {
    let comics = await db.get('comics').value()
    res.json(comics)
})


app.listen(2055, () => {
    console.log("running on 2055");
})