const httpMocks = require('node-mocks-http');
const { describe, it, expect, afterAll, beforeAll} = require('@jest/globals');
const db= require("../../src/models");
const User = db.user;
const RefreshToken = db.refreshToken;

const authController = require('../../src/controllers/auth.controller');
const config = require("../../src/config/auth.config");

const MOCK_USER_DATA = {
  name: 'Test user',
  email: 'user@test.com',
  password: 'SuperSecretPassword'
};

describe('Auth Controller - Unit Tests', () => {
  beforeAll(async () => {
    await db.sequelize.sync({force: true});
  })
  describe('Registration', () => {
    it('Validate registration', async () => {
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        name: MOCK_USER_DATA.name,
        email: MOCK_USER_DATA.email,
        password: MOCK_USER_DATA.password,
      })
      await authController.signup(request, response);
      const testUser = await User.findOne({});
      expect(response.statusCode).toEqual(201);
      expect(response._isEndCalled()).toBeTruthy();
      expect(response._getData()).toEqual({
        message: "User registered successfully",
        user: {
          id: testUser.id,
          name : testUser.name,
          email: testUser.email
        }
      });
    });

    it('User already exist', async () => {
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        name: MOCK_USER_DATA.name + ' - duplicated',
        email: MOCK_USER_DATA.email,
        password: MOCK_USER_DATA.password,
      })
      const r = async () => {
        await authController.signup(request, response);
      };
      await expect(r).rejects.toThrow('Validation error');
    });
  });
  describe('Login', () => {
    it('Should be able to login with the right credentials', async () => {
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        email: MOCK_USER_DATA.email,
        password: MOCK_USER_DATA.password,
      })
      await authController.signin(request, response);
      const testUser = await User.findOne({});
      expect(response.statusCode).toEqual(201);
      expect(response._isEndCalled()).toBeTruthy();
      expect(response._getData()).toMatchObject({
        id: testUser.id,
        name : testUser.name,
        email: testUser.email
      });
    });
    it('Bad email', async () => {
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        email: 'wrong',
        password: MOCK_USER_DATA.password,
      });

      const next = jest.fn();
      await authController.signin(request, response, next);

      await expect(next).toBeCalledWith(new Error('Bad credentials'));
    });
    it('Bad password', async () => {
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        email: MOCK_USER_DATA.email,
        password: 'wrong',
      });

      const next = jest.fn();
      await authController.signin(request, response, next);

      await expect(next).toBeCalledWith(new Error('Bad credentials'));
    });
  });
  describe('Refresh Access Token', () => {
    it('Should be able to refresh a valid token', async () => {
      const testUser = await User.findOne({where: {email: MOCK_USER_DATA.email}});
      const testToken = await RefreshToken.findOne({where: {userId: testUser.id}});
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        refreshToken: testToken.token
      })
      await authController.refreshToken(request, response);
      expect(response.statusCode).toEqual(200);
      expect(response._isEndCalled()).toBeTruthy();
      const data = response._getJSONData();
      const newRefreshToken = await RefreshToken.findOne({where: {token: data.refreshToken}});
      expect(newRefreshToken).toBeDefined()
    });
    it('No Refresh Token', async () => {
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        refreshToken: null
      });

      const next = jest.fn();
      await authController.refreshToken(request, response, next);

      await expect(next).toBeCalledWith(new Error('Refresh Token is required'));
    });
    it('No Refresh Token', async () => {
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        refreshToken: 'Not Found'
      })

      const next = jest.fn();
      await authController.refreshToken(request, response, next);

      await expect(next).toBeCalledWith(new Error('Refresh token is not in database'));
    });
    it('Refresh token expired', async () => {
      const testUser = await User.findOne({where: {email: MOCK_USER_DATA.email}});
      const testToken = await RefreshToken.findOne({where: {userId: testUser.id}});
      let expiredAt = new Date();
      expiredAt.setSeconds(expiredAt.getSeconds() - 1);
      testToken.expiryDate = expiredAt.getTime();
      await testToken.save();
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        refreshToken: testToken.token
      });

      const next = jest.fn();
      await authController.refreshToken(request, response, next);

      await expect(next).toBeCalledWith(new Error('Refresh token expired'));
    });
  });
  afterAll(async () => {
    await db.sequelize.sync({force: true});
  });
});


