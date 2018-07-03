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
      expect(res).to.have.status(201);
      expect(res).to.be.json;
      expect(res.body[0]).to.have.property('name')
      expect(res.body[0]).to.have.property('calories')
      expect(res.body[0].name).to.equal('Apple')
      expect(res.body[0].calories).to.equal(42)
      });
      done();
    });
  });

  describe('GET /api/v1/foods/1', () => {
    it('should respond with one food', (done) => {
      chai.request(app)
      .get('/api/v1/foods/1')
      .end((err, res) => {
      expect(res).to.have.status(201);
      expect(res).to.be.json;
      expect(res.body).to.have.property('name')
      expect(res.body).to.have.property('calories')
      expect(res.body.name).to.equal('Apple')
      expect(res.body.calories).to.equal(42)
      });
      done();
    });
  });

});
