const request = require('supertest');
const expect = require('chai').expect;

const BASE_URL = 'http://localhost:8080';

const ENDPOINT = '/api/ping';

describe('[GET] /ping', () => {
  it('Should responds "pong"', async () => {
    const response = await request(BASE_URL)
      .get(ENDPOINT)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('pong');
  });
});
