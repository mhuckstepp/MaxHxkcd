const {comics} = require('../data')

let comicDict = {}
let newArr = []

comics.forEach(comic => {
  if(!comicDict[comic.num]){
    comicDict[comic.num] = true
    newArr.push(comic)
  } 
})


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comics")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comics").insert(newArr);
    });
};
