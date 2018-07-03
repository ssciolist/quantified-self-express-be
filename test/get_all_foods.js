const environment = process.env.NODE_ENV = 'test';
const app = require('../app');

const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should
const expect = chai.expect
chai.use(chaiHttp)

describe('routes : foods', () => {
  beforeEach((done) => {
    database.migrate.latest()
    .then(() => {
      database.seed.run()
      .then(() => {
        done();
      })
    });
  });

  afterEach((done) => {
    database.migrate.rollback()
    .then(() => {
      done();
    });
  });

  describe('GET /api/v1/foods', () => {
    it('should respond with all foods', (done) => {
      chai.request(app)
      .get('/api/v1/foods')
      .end((err, res) => {
        should.not.exist(err)
        done()
      });
    });
  });

});
