const expect = require('chai').expect;
const RandomDataset = require("../../helpers/random-dataset");
const signup = require('../../steps/auth/signup.step');


describe('[POST] /auth/signup', function () {
  it('Should register successfully', async () => {
    const DATASET = {
      name: RandomDataset.fullName(),
      email: RandomDataset.email(),
      password: RandomDataset.password(),
    };

    const response = await signup({
      body: DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(201);
    expect(response.data.message).to.equal("User registered successfully");
    expect(response.data.user).to.not.null;
    expect(response.data.user.id).to.not.null;
    expect(response.data.user.name).to.equal(DATASET.name);
    expect(response.data.user.email).to.equal(DATASET.email);
  });
  it('Name is required', async () => {
    const DATASET = {
      email: RandomDataset.email(),
      password: RandomDataset.password(),
    };

    const response = await signup({
      body: DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(400);
    expect(response.data).to.contain({
      status: 400,
      message: '"Name" is required'
    });
  });
  it('Email is required', async () => {
    const DATASET = {
      name: RandomDataset.fullName(),
      password: RandomDataset.password(),
    };

    const response = await signup({
      body: DATASET
    });
    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(400);
    expect(response.data).to.contain({
      status: 400,
      message: '"Email" is required'
    });
  });
  it('Password is required', async () => {
    const DATASET = {
      name: RandomDataset.fullName(),
      email: RandomDataset.email(),
    };

    const response = await signup({
      body: DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(400);
    expect(response.data).to.contain({
      status: 400,
      message: '"Password" is required'
    });
  });
  it('Should not allow empty body', async () => {
    const DATASET = {};

    const response = await signup({
      body: DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');

    expect(response.status).to.equal(400);
    expect(response.data).to.contain({
      status: 400,
      message: '"Name" is required'
    });
  });
  it('Should not allow not valid email', async () => {
    const DATASET = {
      name: RandomDataset.fullName(),
      email: 'this-email-is-not-valid.com',
      password: RandomDataset.password(),
    };

    const response = await signup({
      body: DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');

    expect(response.status).to.equal(400);
    expect(response.data).to.contain({
      status: 400,
      message: '"Email" must be a valid email'
    });
  });
  it('Should not allow duplicate user emails', async () => {
    const DATASET = {
      name: RandomDataset.fullName(),
      email: RandomDataset.email(),
      password: RandomDataset.password(),
    };

    let response = await signup({
      body: DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(201);
    expect(response.data.message).to.equal("User registered successfully");
    expect(response.data.user).to.not.null;
    expect(response.data.user.id).to.not.null;
    expect(response.data.user.name).to.equal(DATASET.name);
    expect(response.data.user.email).to.equal(DATASET.email);

    response = await signup({
      body: DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(400);
    expect(response.data).to.contain({
      status: 400,
      message: 'Email is already in use'
    });
  });
  it('Should allow duplicate user names', async () => {
    const DATASET = {
      name: RandomDataset.fullName(),
      email: RandomDataset.email(),
      password: RandomDataset.password(),
    };

    let response = await signup({
      body: DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(201);
    expect(response.data.message).to.equal("User registered successfully");
    expect(response.data.user).to.not.null;
    expect(response.data.user.id).to.not.null;
    expect(response.data.user.name).to.equal(DATASET.name);
    expect(response.data.user.email).to.equal(DATASET.email);

    const NEW_DATASET = {
      name: DATASET.name,
      email: RandomDataset.email(),
      password: RandomDataset.password(),
    };

    response = await signup({
      body: NEW_DATASET
    });

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    expect(response.status).to.equal(201);
    expect(response.data.message).to.equal("User registered successfully");
    expect(response.data.user).to.not.null;
    expect(response.data.user.id).to.not.null;
    expect(response.data.user.name).to.equal(NEW_DATASET.name);
    expect(response.data.user.email).to.equal(NEW_DATASET.email);
  });
});
