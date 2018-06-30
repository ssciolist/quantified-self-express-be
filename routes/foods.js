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
  let food = request.body.food

  if (!message) {
    return res.status(400).sent({ error: "No food property provided!"})
  }

  Food.create(food)
    .then((data) => {
      res.status(201).json(data.rows)
    })
});



module.exports = router;
