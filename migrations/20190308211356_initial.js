exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("visitors", table => {
      table.increments("id").primary();
      table.string("ip");
      table.string("org");
      table.string("postal_code");
      table.string("country");
      table.string("region");
      table.string("city");
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("visitors"),
  ]);
};
