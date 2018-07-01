const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const all = () => {
  return database.raw(
    'SELECT json_build_object('id', m.id, 'name', m.name, 'foods', json_build_object('id', f.id, 'name', f.name, 'calories', f.calories) FROM meals m INNER JOIN meal_foods ON meal_foods.meal_id = m.id INNER JOIN foods f ON f.id = meal_foods.id;'
  );
};

module.exports = {
  all, create, find, update, destroy
}
