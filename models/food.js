const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const all = () => {
  return database.raw(
    'SELECT foods.id, foods.name, foods.calories FROM foods;'
  )
};

const create = (attrs) => {
  return database.raw(
    'INSERT INTO foods (name, calories) VALUES (?, ?) RETURNING id, name, calories;',
    [attrs.name, attrs.calories]
  )
}

const find = (food_id) => {
  let id = food_id;
  return database.raw(
    'SELECT foods.id, foods.name, foods.calories FROM foods WHERE foods.id = ?', id
  )
}

const destroy = (food_id) => {
  let id = food_id;
  return database.raw(
    'DELETE FROM foods WHERE foods.id = ?', id
  )
}

module.exports = {
  all, create, find, destroy
}
