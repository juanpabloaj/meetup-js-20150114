var request = require('supertest');
var app = require('../server').app;
var should = require('should');

describe('GET /api', function(){
  it('mensaje de bienvenida en json', function(done){
    request(app)
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('mensaje de bienvenida debe "bienvenido"', function(done){
    request(app)
      .get('/api')
      .expect(200)
      .end(function(err, res){
        res.body.message.should.match(/bienvenido/);
        done();
      });
  });
});
