
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE meals RESTART IDENTITY')
    .then(function() {
      return Promise.all({
        knew.raw(
          'INSERT INTO meals (name) VALUES (?)', ["Breakfast"]
        ),
        knew.raw(
          'INSERT INTO meals (name) VALUES (?)', ["Snack"]
        ),
        knew.raw(
          'INSERT INTO meals (name) VALUES (?)', ["Lunch"]
        ),
        knew.raw(
          'INSERT INTO meals (name) VALUES (?)', ["Dinner"]
        )
      })
    })
