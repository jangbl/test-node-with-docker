const request = require('supertest');
const assert = require('assert');
const Server = require('../../server');

describe('create developer', () => {
  const { app } = new Server();
  it('should create a developer', async () => {
    const res = await request(app).post('/dev').send({
      email: 'jan@productioncoder.com',
      firstName: 'Jan',
    });

    assert.equal(res.statusCode, 201);

    const responseType = typeof res.body;
    assert.equal(responseType, 'number', 'response type must be a number');
  });
});
