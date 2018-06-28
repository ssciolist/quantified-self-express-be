process.env.NODE_ENV = 'test';

const chai = require('chai')
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

import { assert, expect } from 'chai';

describe('GET /api/v1/foods', () => {
  it('it should get all the foods', (done) => {
    c
  })
})
