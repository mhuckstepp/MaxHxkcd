import axios from 'axios'
import db from '../db'

async function getComic(url) {
    const {data} = await axios.get(url);
    return data
}

async function runCron() {
    let comic = await getComic('http://xkcd.com/info.0.json')
    let checkLast = await db.get('comics').find({num: comic.num}).value()
    console.log(comic, comic.num, checkLast)
    if (!checkLast) {
    db.get('comics')
    .push(comic)
    .write()
    }
}

export { getComic, runCron }