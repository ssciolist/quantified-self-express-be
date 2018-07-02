const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)
pry = require('pryjs')

const create = (meal_id, food_id) => {
  return database('meal_foods').insert({meal_id: meal_id, food_id: food_id}).returning('*')
    .then((data) => {
      return message(1, 2)
    })
};

const destroy = (meal_id, food_id) => {
  return database('meal_foods').where({meal_id: meal_id, food_id: food_id}).del()
};

const message = (meal_id, food_id) => {
  return database.raw(
    "SELECT f.name AS food_name, m.name AS meal_name FROM meal_foods INNER JOIN meals m ON m.id = meal_foods.meal_id INNER JOIN foods f ON f.id = meal_foods.id WHERE m.id = 2 AND f.id = 1;"
  )
  .then((data) => {
    f_name = data.rows[0].food_name
    m_name = data.rows[0].meal_name
    return {food_name: f_name, meal_name: m_name}
  })
};

module.exports = {
  create, destroy, message
}
