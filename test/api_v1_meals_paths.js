const environment = process.env.NODE_ENV = 'test';
const app = require('../app');

const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should
const expect = chai.expect
chai.use(chaiHttp)

describe('routes : api/v1/meals', () => {
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

  describe('GET /api/v1/meals', () => {
    it('should respond with all meals', (done) => {
      chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
      expect(res).to.have.status(201);
      expect(res).to.be.json;
      expect(res.body[0]).to.have.property('name')
      expect(res.body[0].name).to.equal('Breakfast')
      expect(res.body[0]).to.have.property('foods')
      expect(res.body[0].foods).to.deep.equal([])
      });
      done();
    });
  });

  describe('GET /api/v1/meals/:id', () => {
    it('should respond with one food', (done) => {
      chai.request(app)
      .get('/api/v1/meals/2')
      .end((err, res) => {
      expect(res).to.have.status(201);
      expect(res).to.be.json;
      expect(res.body).to.have.property('name')
      expect(res.body).to.have.property('foods')
      expect(res.body.name).to.equal('Snack')
      expect(res.body.foods).to.deep.equal([])
      });
      done();
    });
  });

  describe('POST /api/v1/meals/:id/foods/:id', () => {
    it('should respond with a message', (done) => {
      chai.request(app)
      .post('/api/v1/meals/2/foods/1', )
      .end((err, res) => {
      expect(res).to.have.status(201);
      expect(res).to.be.json;
      expect(res.body).to.have.property('message')
      expect(res.body.message).to.equal('Successfully added Apple to Snack')
      });
      done();
    });
  });


  describe('DELETE /api/v1/foods', () => {
    it('should respond with the updated food', (done) => {
      chai.request(app)
      .delete('/api/v1/meals/2/foods/1', )
      .end((err, res) => {
      expect(res).to.have.status(201);
      expect(res).to.be.json;
      expect(res.body).to.have.property('message')
      expect(res.body.message).to.equal('Successfully removed Apple from Snack')
      });
      done();
    });
  });

});
