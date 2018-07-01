const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const create = () => {
  return database.raw(
    ""
  );
};

const destroy = () => {
  return database.raw(
    ""
  );
};
