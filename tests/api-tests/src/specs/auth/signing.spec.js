const request = require('supertest');
const expect = require('chai').expect;

const {faker} = require('@faker-js/faker');

const BASE_URL = 'http://localhost:8080';

const ENDPOINT = '/api/auth/signup';

describe('[POST] /auth/signing', function () {
  it('Should register successfully', async () => {
    const DATASET = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    console.log('/n-------REQUEST-------')
    console.log(DATASET);
    console.log('-----END-REQUEST----/n')

    const response = await request(BASE_URL)
      .post(ENDPOINT)
      .send(DATASET)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    console.log('/n-------RESPONSE-------')
    console.log(response.body);
    console.log('-----END-RESPONSE----/n')
    expect(response.status).to.equal(201);
    expect(response.body.message).to.equal("User registered successfully");
    expect(response.body.user).to.not.null;
    expect(response.body.user.id).to.not.null;
    expect(response.body.user.name).to.equal(DATASET.name);
    expect(response.body.user.email).to.equal(DATASET.email);
  });
  it('Name is required', async () => {
    const DATASET = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    console.log('/n-------REQUEST-------')
    console.log(DATASET);
    console.log('-----END-REQUEST----/n')

    const response = await request(BASE_URL)
      .post(ENDPOINT)
      .send(DATASET)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    console.log('/n-------RESPONSE-------')
    console.log(response.body);
    console.log('-----END-RESPONSE----/n')
    expect(response.status).to.equal(400);
    expect(response.body).to.contain({
      status: 400,
      message: '"Name" is required'
    });
  });
  it('Email is required', async () => {
    const DATASET = {
      name: faker.person.fullName(),
      password: faker.internet.password(),
    };

    console.log('/n-------REQUEST-------')
    console.log(DATASET);
    console.log('-----END-REQUEST----/n')

    const response = await request(BASE_URL)
      .post(ENDPOINT)
      .send(DATASET)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    console.log('/n-------RESPONSE-------')
    console.log(response.body);
    console.log('-----END-RESPONSE----/n')
    expect(response.status).to.equal(400);
    expect(response.body).to.contain({
      status: 400,
      message: '"Email" is required'
    });
  });
  it('Password is required', async () => {
    const DATASET = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };

    console.log('/n-------REQUEST-------')
    console.log(DATASET);
    console.log('-----END-REQUEST----/n')

    const response = await request(BASE_URL)
      .post(ENDPOINT)
      .send(DATASET)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    console.log('/n-------RESPONSE-------')
    console.log(response.body);
    console.log('-----END-RESPONSE----/n')
    expect(response.status).to.equal(400);
    expect(response.body).to.contain({
      status: 400,
      message: '"Password" is required'
    });
  });
  it('Should not allow empty body', async () => {
    const DATASET = {};

    console.log('/n-------REQUEST-------')
    console.log(DATASET);
    console.log('-----END-REQUEST----/n')

    const response = await request(BASE_URL)
      .post(ENDPOINT)
      .send(DATASET)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    console.log('/n-------RESPONSE-------')
    console.log(response.body);
    console.log('-----END-RESPONSE----/n')
    expect(response.status).to.equal(400);
    expect(response.body).to.contain({
      status: 400,
      message: '"Name" is required'
    });
  });
  it('Should not allow duplicate user emails', async () => {
    const DATASET = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    console.log('/n-------REQUEST-------')
    console.log(DATASET);
    console.log('-----END-REQUEST----/n')

    let response = await request(BASE_URL)
      .post(ENDPOINT)
      .send(DATASET)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    console.log('/n-------RESPONSE-------')
    console.log(response.body);
    console.log('-----END-RESPONSE----/n')
    expect(response.status).to.equal(201);
    expect(response.body.message).to.equal("User registered successfully");
    expect(response.body.user).to.not.null;
    expect(response.body.user.id).to.not.null;
    expect(response.body.user.name).to.equal(DATASET.name);
    expect(response.body.user.email).to.equal(DATASET.email);

    console.log('/n-------REQUEST-------')
    console.log(DATASET);
    console.log('-----END-REQUEST----/n')

    response = await request(BASE_URL)
      .post(ENDPOINT)
      .send(DATASET)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    console.log('/n-------RESPONSE-------')
    console.log(response.body);
    console.log('-----END-RESPONSE----/n')
    expect(response.status).to.equal(400);
    expect(response.body).to.contain({
      status: 400,
      message: 'Email is already in use'
    });
  });
  it('Should allow duplicate user names', async () => {
    const DATASET = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    console.log('/n-------REQUEST-------')
    console.log(DATASET);
    console.log('-----END-REQUEST----/n')

    let response = await request(BASE_URL)
      .post(ENDPOINT)
      .send(DATASET)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    console.log('/n-------RESPONSE-------')
    console.log(response.body);
    console.log('-----END-RESPONSE----/n')
    expect(response.status).to.equal(201);
    expect(response.body.message).to.equal("User registered successfully");
    expect(response.body.user).to.not.null;
    expect(response.body.user.id).to.not.null;
    expect(response.body.user.name).to.equal(DATASET.name);
    expect(response.body.user.email).to.equal(DATASET.email);

    const NEW_DATASET = {
      name: DATASET.name,
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    console.log('/n-------REQUEST-------')
    console.log(NEW_DATASET);
    console.log('-----END-REQUEST----/n')

    response = await request(BASE_URL)
      .post(ENDPOINT)
      .send(NEW_DATASET)
      .set('Accept', 'application/json');

    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    console.log('/n-------RESPONSE-------')
    console.log(response.body);
    console.log('-----END-RESPONSE----/n')
    expect(response.status).to.equal(201);
    expect(response.body.message).to.equal("User registered successfully");
    expect(response.body.user).to.not.null;
    expect(response.body.user.id).to.not.null;
    expect(response.body.user.name).to.equal(NEW_DATASET.name);
    expect(response.body.user.email).to.equal(NEW_DATASET.email);
  });
});
