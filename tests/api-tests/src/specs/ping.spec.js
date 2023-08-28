const apiCall = require("../helpers/api-call");
const expect = require('chai').expect;

const ENDPOINT = '/api/ping';

describe('[GET] /ping', () => {
  it('Should responds "pong"', async () => {
    const response = await apiCall.get(ENDPOINT);

    expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
    expect(response.status).to.equal(200);
    expect(response.data).to.equal('pong');
  });
});
