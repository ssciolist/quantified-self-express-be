const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const create = (meal_id, food_id) => {
  return database('meal_foods').insert({meal_id: meal_id, food_id: food_id}).returning('*')
    .then((data) => {
      return message(meal_id, food_id)
    })
};

const destroy = (meal_id, food_id) => {
  return database('meal_foods').where({meal_id: meal_id, food_id: food_id}).del()
  .then((data) => {
    return message(meal_id, food_id)
  })
};

const favorites = () => {
  return database.raw(
    `SELECT DISTINCT(sub.timeseaten) as timeseaten, array_agg(jsonb_build_object('name', foods.name, 'calories', foods.calories, 'mealsWhenEaten', meals.name)) as foods
    FROM (SELECT DISTINCT COUNT(food_id) as timesEaten, food_id FROM meal_foods GROUP BY meal_foods.food_id) sub, foods, meals, meal_foods
    WHERE foods.id = sub.food_id AND meal_foods.meal_id = meals.id
    GROUP BY sub.timeseaten
    ORDER BY sub.timeseaten DESC;`
  );
};

const message = (meal_id, food_id) => {
  return database.raw(
    "SELECT foods.name AS food_name, meals.name AS meal_name FROM foods, meals WHERE meals.id = ? AND foods.id = ?;",
    [meal_id, food_id]
  )
  .then((data) => {
    f_name = data.rows[0].food_name
    m_name = data.rows[0].meal_name
    return {food_name: f_name, meal_name: m_name}
  })
};

module.exports = {
  create, destroy, message, favorites
}
