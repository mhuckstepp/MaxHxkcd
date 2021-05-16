import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import {jsonObjAll } from './lib/seedData'

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ comics: [ 
]})
.write()

const deconJsonAll = jsonObjAll

console.log(deconJsonAll)

// db.get('comics')
//   .push(JSON.stringify(jsonObjAll))
//   .write()

export default db