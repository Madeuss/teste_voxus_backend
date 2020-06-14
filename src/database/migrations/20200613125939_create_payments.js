exports.up = function (knex) {
  return knex.schema.createTable("payments", function (table) {
    table.increments();

    table.string("title", [100]).notNullable();
    table.decimal("value").notNullable();
    table.date("date").notNullable();
    table.string("external_tax").notNullable();
    table.string("comments");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("payments");
};
