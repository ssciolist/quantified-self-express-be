const environment = process.env.NODE_ENV = 'test';

const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)



describe('GET /api/v1/foods', () => {
  it('it should get all the foods', (done) => {
    c
  })
})
