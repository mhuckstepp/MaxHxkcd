const axios = require('axios')
const db = require('./db-config')

async function getComic(url) {
    const {data} = await axios.get(url);
    return data
}

async function getLatest() {
    let comic = await getComic('http://xkcd.com/info.0.json')
    let checkLast = await db('comics').where({num: comic.num})
    console.log('comic!', comic,'checklast!', checkLast)
    const time = new Date()
    console.log(time.toString())
    if (!checkLast.length) {
    db('comics').insert(comic).then(res => {
        console.log(res)
    }).catch(err => console.log(err));
    }
}

getLatest()

// async function automateDownloads(count) {
//     const newArr = []
//     for (let i = 0; i <= 1; i++){
//         let comic = await getComic(`http://xkcd.com/${count + i}/info.0.json`)
//         newArr.push(comic)
//     }
//     newArr.forEach(comic => {
//         db('comics')
//         .insert(comic)
//         })
// }

module.exports = 
{ getComic, getLatest }