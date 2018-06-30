var express = require('express');
var router = express.Router();
var Food = require("../models/food")

/* GET home page. */
router.get('/', function(req, res, next) {
  Food.all
    .then((data) => {
      response.status(201).json(data.rows)
    })
});

module.exports = router;
