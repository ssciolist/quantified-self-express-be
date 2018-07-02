const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)
pry = require('pryjs')

const create = (meal_id, food_id) => {
  return database('meal_foods').insert({meal_id: meal_id, food_id: food_id}).returning('*')
    .then((data) => {
      return message(meal_id, food_id)
    })
};

const destroy = (meal_id, food_id) => {
  return database('meal_foods').where({meal_id: meal_id, food_id: food_id}).del()
};

const message = (meal_id, food_id) => {
  return database.raw(
    "SELECT foods.name AS food_name, meals.name AS meal_name FROM meal_foods INNER JOIN meals on meals.id = meal_foods.meal_id INNER JOIN foods ON foods.id = meal_foods.food_id WHERE meal_foods.meal_id = ? AND meal_foods.food_id = ?;",
    [meal_id, food_id]
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
