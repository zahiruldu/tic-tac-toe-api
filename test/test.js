const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

//==================== API tests ====================

describe('/ server running test', () => {
  it('it should visit the server running on http://localhost:8080 ', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  });
});

describe('/games', () => {
  it('it should return all games /games ', (done) => {
    chai.request(server)
        .get('/games')
        .end((err, res) => {
          // console.log(res.body)
          res.should.have.status(200);
          res.body[0].should.have.property('board');
          res.body[0].should.have.property('sessionId');
          res.body[0].should.have.property('status');
          res.body[0].should.have.property('_id');
          done();
        });
  });
});
