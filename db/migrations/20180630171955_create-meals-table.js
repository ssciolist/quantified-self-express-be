
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
    .createTable('meals', function(meals) {
      meals.increments('id').primary();
      meals.string('name');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema
    .dropTable('meals')
  ]);
};
