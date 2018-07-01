const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const all = () => {
  return database.raw(
    'SELECT json_build_object('id', m.id, 'name', m.name, 'foods', json_build_object('id', f.id, 'name', f.name, 'calories', f.calories) FROM meals m INNER JOIN meal_foods ON meal_foods.meal_id = m.id INNER JOIN foods f ON f.id = meal_foods.id;'
  );
};

const create = (attrs) => {
  return database.raw(
    'INSERT INTO foods (name, calories) VALUES (?, ?) RETURNING id, name, calories;',
    [attrs.name, attrs.calories]
  );
}

const find = (food_id) => {
  let id = food_id;
  return database.raw(
    'SELECT foods.id, foods.name, foods.calories FROM foods WHERE foods.id = ?', id
  );
}

const update = (food_id, attrs) => {
  let id = food_id;
  return database.raw(
    'UPDATE foods SET name = ?, calories = ? WHERE id = ? RETURNING *',
    [attrs.name, attrs.calories, id]
  );
}

const destroy = (food_id) => {
  let id = food_id;
  return database.raw(
    'DELETE FROM foods WHERE foods.id = ?', id
  );
}

module.exports = {
  all, create, find, update, destroy
}