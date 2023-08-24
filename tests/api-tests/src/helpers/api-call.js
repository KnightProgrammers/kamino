require('dotenv').config();
const request = require("supertest");
var clc = require("cli-color");
const expect = require('chai').expect;
const tv4 = require("tv4");

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

try {
  new URL(BASE_URL);
} catch (_) {
  throw new Error(`BASE_URL [${BASE_URL}] is not a valid url`);
}

const debug = clc.white;

module.exports = {
  post: async (endpoint, {body = {}, headers = []}, validation) => {
    const r = request(BASE_URL).post(endpoint);

    console.log(debug('\n-------REQUEST-------'));
    console.log(body);
    console.log(debug('-----END-REQUEST----\n'));
    if (headers.length) console.log(debug('\n-------HEADERS-------'));
    for (const header of headers) {
      r.set(header.name, header.value)
      console.log(`[${header.name}]: ${header.value}`);
    }
    if (headers.length) console.log(debug('-------END-HEADERS-------\n'));
    const response = await r.send(body);
    console.log(debug('\n-------RESPONSE-------'));
    console.log(response.body);
    console.log(debug('-----END-RESPONSE----\n'));
    if (validation) {
      const {status = 200, schema = null} = validation;
      if (response.status === status) {
        expect(tv4.validate(response.body, schema)).to.be.true;
      }
    }
    return response;
  },
  get: async (endpoint, {body = {}, headers = []}) => {
    const r = request(BASE_URL).get(endpoint);
    if (headers.length) console.log(debug('\n-------HEADERS-------'));
    for (const header of headers) {
      r.set(header.name, header.value)
      console.log(`[${header.name}]: ${header.value}`);
    }
    if (headers.length) console.log(debug('-------END-HEADERS-------\n'));
    const response = await r.send();
    console.log(debug('\n-------RESPONSE-------'));
    console.log(response.body);
    console.log(debug('-----END-RESPONSE----\n'));
    return response;
  }
}
