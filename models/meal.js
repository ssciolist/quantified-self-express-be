const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const all = () => {
  return database.raw(
    "SELECT meals.id, meals.name, array_to_json(array_agg(foods.*)) as foods FROM meals LEFT JOIN meal_foods ON meals.id = meal_foods.meal_id LEFT JOIN foods ON foods.id = meal_foods.food_id GROUP BY meals.id;"
  );
};

module.exports = {
  all
}
