const express = require('express');
const router = express.Router();
pry = require('pryjs')

const Meal = require('../models/meal')

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
  eval(pry.it)


});

/* Delete one meal food */
router.post('/:id/foods/:food_id', (req, res) => {
  let id = req.params.id;


});

module.exports = router;
