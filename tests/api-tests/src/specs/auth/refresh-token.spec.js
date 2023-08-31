const expect = require('chai').expect;
const RandomDataset = require("../../helpers/random-dataset");
const signin = require('../../steps/auth/signin.step');
const signup = require('../../steps/auth/signup.step');
const refreshToken = require('../../steps/auth/refresh-token.step');
const getMe = require("../../steps/user/me.step");

const DATASET = {
  name: RandomDataset.fullName(),
  email: RandomDataset.email(),
  password: RandomDataset.password(),
};

let USER;
let AUTH_TOKEN;

describe('[POST] /auth/refreshtoken', function () {
  before(async () => {
    const signupResult = await signup({
      body: DATASET
    });
    USER = signupResult.data.user;
    const signinResult = await signin({
      body: {
        email: DATASET.email,
        password: DATASET.password,
      }
    });
    AUTH_TOKEN = {
      accessToken: signinResult.data.accessToken,
      refreshToken: signinResult.data.refreshToken
    }
  });
  it('Should refresh the auth token successfully', async () => {
    const response = await refreshToken({
      body: {
        refreshToken: AUTH_TOKEN.refreshToken
      }
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(200);
    expect(response.data.accessToken).to.not.null;
    expect(response.data.refreshToken).to.not.null;

    const getMeResponse = await getMe({
      headers: {
        'Accept': 'application/json',
        'x-access-token': response.data.accessToken
      }
    });

    expect(getMeResponse.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(getMeResponse.status).to.equal(200);
    expect(getMeResponse.data).to.contains(USER);
  });
  it('Refresh token is required', async () => {
    const response = await refreshToken({
      body: {}
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(400);
    expect(response.data).to.contains({
      status: 400,
      message: '"Refresh Token" is required'
    });
  });
  it('The server validates the refresh token', async () => {
    const response = await refreshToken({
      body: {
        refreshToken: 'Not Valid'
      }
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(403);
    expect(response.data).to.contains({
      status: 403,
      message: 'Refresh token expired'
    });
  });
});
