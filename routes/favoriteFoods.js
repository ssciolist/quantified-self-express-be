var express = require('express');
var router = express.Router();

const Food = require('../models/food')
const Meal = require('../models/meal')
const MealFood = require('../models/meal_food')

/* GET favorite foods */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
