const express = require('express');
const router = express.Router();

const Meal = require('../models/meal')

/* GET all foods page. */
router.get('/', (req, res) => {
  Meal.all()
    .then((data) => {
      res.status(201).send(data.rows)
    })
});

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

module.exports = router;
