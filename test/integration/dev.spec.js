const request = require('supertest');
const Server = require('../../server');
const assert = require('assert');

describe('create developer', () => {
  const { app } = new Server();
  it('should create a developer', (done) => {
    request(app)
      .post('/dev')
      .send({
        email: 'jan@productioncoder.com',
        firstName: 'John',
      })
      .expect(201, (res) => {
        const responseType = typeof res;
        assert.equal(responseType, 'number', 'response type must be a number');
        done();
      });
  });
});
