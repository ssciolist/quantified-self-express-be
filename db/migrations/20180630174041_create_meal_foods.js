
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
    .createTable('meal_foods', function(meal_foods) {
      meal_foods.increments('id').primary();
      meal_foods.integer('meal_id').references('id').inTable('meals').notNull()
      meal_foods.integer('food_id').references('id').inTable('foods').notNull()
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema
    .dropTable('meal_foods')
  ])
};
