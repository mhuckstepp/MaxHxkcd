exports.up = async (knex) => {
  await knex.schema.table("comics", (comics) => {
    comics.integer("favorites").defaultTo(0);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("comics");
};
