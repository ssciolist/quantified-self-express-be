# Quantified Self (Express Edition)

Quantified Self is an API built with Express to serve JSON data meals and snacks to track calories. This API is intended to serve a separate Quantified Self front end, which you can see [deployed here](https://ssciolist.github.io/quantified-self-fe/foods.html).

See the API itself deployed [on Heroku here](https://quantified-self-express-ma.herokuapp.com/).

Check out the API reference index to see everything you can do.

## Setup

Once you've forked or cloned this repository to your computer, run `npm install` to get the proper dependencies installed.

Then, create your PostgreSQL database.

`CREATE DATABASE qsexpress;
CREATE DATABASE qsexpress_test;`

Run your migrations with the following command.

`knex migrate:latest`

And finally, seed your database:

`knex seed:run`

If you have installed nodemon (`$ npm install nodemon -g
$ nodemon bin/www`) you should be able to run `nodemon bin/www` to start a server and query the API. Most server instances will be accessible at http://localhost:3000/.

## Running the tests

Use `npm test` from the terminal to run all tests.

## API reference index

This API has 9 endpoints designed to support calorie tracking in the QS front end. Click on one of the endpoints to jump to more information about how to use it.

No API keys or additional header information should be required to access the API.

1. [GET request to "/api/v1/foods"](#Allfoods)
2. [POST request to "/api/v1/foods"](#new_food)
3. [GET request to "/api/v1/foods/:id"](#show_food)
4. [PATCH request to "/api/v1/foods/:id"](#update_food)
5. [DELETE request to "/api/v1/foods/:id"](#delete_food)
6. [GET request to "/api/v1/meals"](#all_meals)
7. [GET request to "/api/v1/meals/:meal_id/foods"](#show_meal)
8. [POST request to "/api/v1/meals/:meal_id/foods/:food_id"](#update_meal_food)
9. [DELETE request to "/api/v1/meals/:meal_id/foods/:food_id"](#delete_meal_food)

#### <a name="Allfoods"></a> GET request to "/api/v1/foods"
A properly formatted API call will return all foods in the database currently.

Each individual food will be returned with an id, name and calories. EG:

```
{
"id": 1,
"name": "Banana",
"calories": 150
}
```
#### <a name="new_food"></a> POST request to "/api/v1/foods"
A properly formatted request to "/api/v1/foods" will create a new food and return that food as JSON formatted with its id, name and calories.

To create a food, you need to send food data in the post body. Follow this format:

```
{ "food": { "name": "Name of food here", "calories": "Calories here"} }
```

#### <a name="show_food"></a> GET request to "/api/v1/foods/:id"
A properly formatted request to "/api/v1/foods/:id" will return an individual food will be returned with an id, name and calories.

To return an individual food, you need to know the ID of the food record and include it in your call.


```
{
"id": 1,
"name": "Banana",
"calories": 150
}
```

#### <a name="update_food"></a> PATCH request to "/api/v1/foods/:id"
A properly formatted request will update an individual food and it will be returned with an id, name and calories.

To update a food, you need to send food data in the post body. Follow this format:

```
{ "food": { "name": "Name of food here", "calories": "Calories here"} }
```

#### <a name="delete_food"></a> DELETE request to "/api/v1/foods/:id"
A properly formatted request will delete an individual food and return a success message.

To update a food, you need to include its id.
#### <a name="all_meals"></a> GET request to "/api/v1/meals"
A properly formatted request will return all meals in the database.

#### <a name="show_meal"></a> GET request to "/api/v1/meals/:meal_id/foods"
A properly formatted request will return all foods of an individual meal in the database.

To call the meal foods, you need to include the id of the meal.

#### <a name="update_meal_food"></a> POST request to "/api/v1/meals/:meal_id/foods/:food_id"
A properly formatted request will add one foods to an individual meal in the database.

A success yields the following message:

```
{
    "message": "Successfully added FOODNAME to MEALNAME"
}
```

#### <a name="delete_meal_food"></a> DELETE request to "/api/v1/meals/:meal_id/foods/:food_id"

A properly formatted request will delete one foods to an individual meal in the database.

A success yields the following message:

```
{
    "message": "Successfully removed FOODNAME from MEALNAME"
}
```


## Versions

* Express version 4.16.0
* PostgreSQL version 10.3
