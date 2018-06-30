const express = require('express');
const router = express.Router();
const Food = require('../models/food')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


/* GET all foods page. */
router.get('/', (req, res) => {
  Food.all()
    .then((data) => {
      res.status(201).json(data.rows)
    })
});

/* Post a food. */
router.post('/', (req, res) => {
  let food_attrs = JSON.parse(req.body.food)

  if (!food_attrs) {
    return res.status(422).send({ error: "No food property provided"})
  }

  Food.create(food_attrs)
    .then((data) => {
      res.status(201).json(data.rows[0])
    })
});



module.exports = router;
