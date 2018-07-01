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

module.exports = router;
