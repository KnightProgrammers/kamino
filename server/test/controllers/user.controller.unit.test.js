const httpMocks = require('node-mocks-http');
const { describe, it, expect, afterAll, beforeAll} = require('@jest/globals');
const db= require("../../src/models");
const User = db.user;

const userController = require('../../src/controllers/user.controller');

const MOCK_USER_DATA = {
  name: 'Test user',
  email: 'user@test.com',
  password: 'SuperSecretPassword'
};

describe('User Controller - Unit Tests', () => {
  beforeAll(async () => {
    await db.sequelize.sync({force: true});
    await User.create(MOCK_USER_DATA);
  })
  it('Should get the current user data', async () => {
    const testUser = await User.findOne({});

    const response = httpMocks.createResponse();
    const request = httpMocks.createRequest();
    request.userId = testUser.id;
    await userController.userMe(request, response);

    expect(response.statusCode).toEqual(200);
    expect(response._isEndCalled()).toBeTruthy();
    expect(response._getData()).toEqual({
      id: testUser.id,
      name: testUser.name,
      email: testUser.email
    });
  });
  it('Should throw an error if there is not user logged in', async () => {
    const response = httpMocks.createResponse();
    const request = httpMocks.createRequest();
    request.userId = null;

    const r = async () => {
       await userController.userMe(request, response);
    };
    await expect(r).rejects.toThrow('User not found');

    await expect(response._isEndCalled()).toBeFalsy();
  });
  it('Should throw an error if the user doesn\'t exist', async () => {
    const response = httpMocks.createResponse();
    const request = httpMocks.createRequest();
    request.userId = '9a07e6c3-21be-45b0-a296-53eb77f5d77a';

    const r = async () => {
       await userController.userMe(request, response);
    };
    await expect(r).rejects.toThrow('User not found');
  });
  it('Validate response when the user has no name', async () => {
    const testUser = await User.create({
      ...MOCK_USER_DATA,
      name: undefined
    });
    const response = httpMocks.createResponse();
    const request = httpMocks.createRequest();
    request.userId = testUser.id;

    await userController.userMe(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._isEndCalled()).toBeTruthy();
    expect(response._getData()).toEqual({
      id: testUser.id,
      name: '',
      email: testUser.email
    });
  });
  afterAll(async () => {
    await db.sequelize.sync({force: true});
  });
});


