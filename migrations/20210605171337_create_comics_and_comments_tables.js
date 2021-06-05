
exports.up = async (knex) => {
    await knex.schema.createTable("comics", (comics) => {
      comics.increments('comic_id').unique()
      comics.integer("num").notNullable().unique()
      comics.text("month")
      comics.text("link");
      comics.text("year");
      comics.text("news");
      comics.text("safe_title");
      comics.text("transcript");
      comics.text("alt");
      comics.text("img");
      comics.text("title");
      comics.text("day");
      comics.text("extra_parts");
    }).createTable('comments', (tbl => {
        tbl.increments('comment_id')
        tbl.string("poster").notNullable()
        tbl.string('comment')
        tbl.integer("num").notNullable().unsigned().references("num").inTable('comics').onDelete('CASCADE').onUpdate('CASCADE')
    }));
  };
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists("comments");
    await knex.schema.dropTableIfExists("comics");
  };