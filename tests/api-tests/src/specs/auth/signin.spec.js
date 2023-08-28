const expect = require('chai').expect;
const RandomDataset = require("../../helpers/random-dataset");
const signin = require('../../steps/auth/signin.step');
const signup = require('../../steps/auth/signup.step');

const DATASET = {
  name: RandomDataset.fullName(),
  email: RandomDataset.email(),
  password: RandomDataset.password(),
};

let USER;

describe('[POST] /auth/signing', function () {
  before(async () => {
    const result = await signup({
      body: DATASET
    });
    USER = result.data.user;
  })
  it('Should login successfully', async () => {
    const response = await signin({
      body: {
        email: DATASET.email,
        password: DATASET.password,
      }
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(201);
    expect(response.data.accessToken).to.not.null;
    expect(response.data.refreshToken).to.not.null;
    expect(response.data.id).to.equal(USER.id);
    expect(response.data.name).to.equal(USER.name);
    expect(response.data.email).to.equal(USER.email);
  });
  it('Email is required', async () => {
    const response = await signin({
      body: {
        password: DATASET.password
      }
    });
    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(400);
    expect(response.data).to.contain({
      status: 400,
      message: '"Email" is required'
    });
  });
  it('Password is required', async () => {
    const response = await signin({
      body: {
        email: DATASET.email,
      }
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(400);
    expect(response.data).to.contain({
      status: 400,
      message: '"Password" is required'
    });
  });
  it('Should not allow empty body', async () => {
    const response = await signin({
      body: {}
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');

    expect(response.status).to.equal(400);
    expect(response.data).to.contain({
      status: 400,
      message: '"Email" is required'
    });
  });
  it('Validate response on invalid credentials', async () => {
    const DATASET = {
      email: RandomDataset.email(),
      password: RandomDataset.password(),
    };

    const response = await signin({
      body: DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');

    expect(response.status).to.equal(401);
    expect(response.data).to.contain({
      status: 401,
      message: 'Bad credentials'
    });
  });
});
