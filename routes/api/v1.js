var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

/* GET all foods page. */
router.get('/foods', function(req, res, next) {
  database.raw('SELECT foods.id, foods.name, foods.calories FROM foods;')
    .then((data) => {
      res.json(data.rows);
    })
});
