exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("visitors", table => {
      table.increments("id").primary();
      table.string("ip");
      table.string("country_code");
      table.string("region");
      table.string("city");
      table.string("time_stamp");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("visitors"),
  ]);
};
