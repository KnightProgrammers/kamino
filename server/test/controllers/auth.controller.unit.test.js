const httpMocks = require('node-mocks-http');
const { describe, it, expect, afterAll, beforeAll} = require('@jest/globals');
const db= require("../../src/models");
const User = db.user;
const RefreshToken = db.refreshToken;

const authController = require('../../src/controllers/auth.controller');

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
      await authController.signup(request, response);
      const testUser = await User.findOne({where: {name: MOCK_USER_DATA.name + ' - duplicated'}});
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
      const r = async () => {
        await authController.signin(request, response);
      };
      expect(r).rejects.toThrow('Bad credentials');
    });
    it('Bad password', async () => {
      const response = httpMocks.createResponse();
      const request = httpMocks.createRequest();
      request._setBody({
        email: MOCK_USER_DATA.email,
        password: 'wrong',
      });
      const r = async () => {
        await authController.signin(request, response);
      };
      expect(r).rejects.toThrow('Bad credentials');
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
    })
  });
  afterAll(async () => {
    await db.sequelize.sync({force: true});
  });
});

