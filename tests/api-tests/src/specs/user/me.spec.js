const expect = require('chai').expect;
const RandomDataset = require("../../helpers/random-dataset");
const signin = require('../../steps/auth/signin.step');
const signup = require('../../steps/auth/signup.step');
const getMe = require('../../steps/user/me.step');

const DATASET = {
  name: RandomDataset.fullName(),
  email: RandomDataset.email(),
  password: RandomDataset.password(),
};

let USER;
let AUTH_TOKEN;

describe('[GET] /api/users/me', () => {
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
    console.log(signinResult.data);
    AUTH_TOKEN = {
      accessToken: signinResult.data.accessToken,
      refreshToken: signinResult.data.refreshToken
    }
  });
  it('Should get current user data" with Auth token', async () => {
    const response = await getMe({
      headers: {
        'Accept': 'application/json',
        'x-access-token': AUTH_TOKEN.accessToken
      }
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(200);
    expect(response.data).to.contains(USER);
  });
  it('Should get current user data" without Auth token', async () => {
    const response = await getMe({
      headers: {
        'Accept': 'application/json'
      }
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(403);
    expect(response.data).to.contains({status: 403, message: 'No token provided'});
  });
});
