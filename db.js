import { json } from 'express'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { runCron } from './lib/scraper'
import {jsonObjAll } from './lib/seedData'

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ comics: [ 
]})
.write()


export default db