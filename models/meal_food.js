const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)
pry = require('pryjs')

const create = (meal_id, food_id) => {
  return database('meal_foods').insert({meal_id: meal_id, food_id: food_id})
};

const destroy = (meal_id, food_id) => {
  return database('meal_foods').where({meal_id: meal_id, food_id: food_id}).del()
};

module.exports = {
  create, destroy
}
