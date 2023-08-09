const httpMocks = require('node-mocks-http');
const { describe, it, expect} = require('@jest/globals');

const healthController = require('../../src/controllers/health.controller');

describe('Health Controller - Unit Tests', () => {
  it('Ping endpoint should return pong', async () => {
    const response = httpMocks.createResponse();
    const request = httpMocks.createRequest();

    await healthController.ping(request, response);

    expect(response.statusCode).toEqual(200);
    expect(response._isEndCalled()).toBeTruthy();
    expect(response._getData()).toEqual('pong');
  });
});


