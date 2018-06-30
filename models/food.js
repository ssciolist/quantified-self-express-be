const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const all = () => {
  return database.raw(
    'SELECT foods.id, foods.name, foods.calories FROM foods;'
  )
};

const create = (attrs) => {
  return database.returning(['id', 'name', 'calories']).insert(attrs)
}

module.exports = {
  all, create
}
