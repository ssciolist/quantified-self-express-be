const express = require('express');
const router = express.Router();

const Food = require('../../../models/food')

/* configure Yummly api call */
const APP_ID = ;
const APP_KEY = ;

/* GET all foods page. */
router.get('/', (req, res) => {
  Food.all()
    .then((data) => {
      res.status(201).json(data.rows)
    })
});

/* Post a food. */
router.post('/', (req, res) => {
  let food_attrs = req.body.food

  if (!food_attrs) {
    return res.status(422).send({ error: `No food property provided`})
  }

  Food.create(food_attrs)
    .then((data) => {
      res.status(201).json(data.rows[0])
    })
});

/* Get a food. */
router.get('/:id', (req, res) => {
  let id = req.params.id;

  if (!id) {
    return res.status(422).send({ error: `No id provided`})
  }

  Food.find(id)
    .then((data) => {
      res.status(201).json(data.rows[0])
    })
    .catch(err => {
      return res.sendStatus(404);
    })
});

/* Update a food. */
router.put('/:id', (req, res, next) => {

  let id = req.params.id;
  let food_attrs = req.body.food;


  if (!food_attrs) {
    return res.status(422).send({ error: `No food property provided ${food_attrs}`})
  }

  Food.update(id, food_attrs)
    .then((data) => {
      res.status(201).json(data.rows[0])
    })
    .catch(err => {
      return res.sendStatus(404);
    })
});

/* Delete a food. */
router.delete('/:id', (req, res) => {
  let id = req.params.id;

  Food.destroy(id)
    .then((data) => {
      return res.status(204);
    })
    .catch(err => {
      return res.sendStatus(404);
    })
});

/* Get recipes for a food. */
router.get('/:id/recipes', (req, res) => {
  let id = req.params.id;

  if (!id) {
    return res.status(422).send({ error: `No id provided`})
  }

  // Food.find(id)
  //   .then((data) => {
  //     res.status(201).json(data.rows[0])
  //   })
  //   .catch(err => {
  //     return res.sendStatus(404);
  //   })
});


module.exports = router;
