const axios = require('axios')
const db = require('../db')

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

async function automateDownloads(count) {
    const newArr = []
    for (let i = 0; i <= 1; i++){
        let comic = await getComic(`http://xkcd.com/${count + i}/info.0.json`)
        newArr.push(comic)
    }
    newArr.forEach(comic => {
        db.get('comics')
        .push(comic)
        .write()
        })
}

module.exports = 
{ getComic, runCron, automateDownloads }