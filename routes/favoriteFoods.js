var express = require('express');
var router = express.Router();

const Food = require('../models/food')
const Meal = require('../models/meal')
const MealFood = require('../models/meal_food')

/* GET favorite foods */
router.get('/', function(req, res, next) {
  MealFood.favorites()
    .then((data) => {
      res.status(201).send(data.rows)
    })
});

module.exports = router;
