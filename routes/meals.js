const express = require('express');
const router = express.Router();
pry = require('pryjs')

const Meal = require('../models/meal')
const MealFood = require('../models/meal_food')

/* GET all meals page. */
router.get('/', (req, res) => {
  Meal.all()
    .then((data) => {
      res.status(201).send(data.rows)
    })
});

/* GET one meals page. */
router.get('/:id', (req, res) => {
  let id = req.params.id;

  Meal.find(id)
    .then((data) => {
      res.status(201).send(data.rows[0])
    })
    .catch(err => {
      return res.sendStatus(404);
    })
});

/* Post one meal food */
router.post('/:id/foods/:food_id', (req, res) => {
  let id = req.params.id;
  let food_id = req.params.food_id;

  MealFood.create(id, food_id)
    .then((data) => {
      res.status(201).send()
    })
    .catch(err => {
      return res.sendStatus(404);
    })
});

/* Delete one meal food */
router.delete('/:id/foods/:food_id', (req, res) => {
  let id = req.params.id;
  let food_id = req.params.food_id;

  MealFood.destroy(id, food_id)
    .then((data) => {
      res.status(201).send()
    })
    .catch(err => {
      return res.sendStatus(404);
    })
});

module.exports = router;
