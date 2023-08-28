require('dotenv').config();
const axios = require("axios");
const clc = require("cli-color");
const expect = require('chai').expect;
const tv4 = require("tv4");

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

try {
  new URL(BASE_URL);
} catch (_) {
  throw new Error(`BASE_URL [${BASE_URL}] is not a valid url`);
}

const debug = clc.white;
const info = clc.blue;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: process.env.TIMEOUT || 10000,
  validateStatus: () => true
});

module.exports = {
  post: async (endpoint, body = {}, config = {}, validation) => {
    const {headers = {}} = config;

    console.log(info(`\nEndpoint: ${endpoint}`));
    console.log(debug('\n-------REQUEST-------'));
    console.log(body);
    console.log(debug('-----END-REQUEST----\n'));
    if (Object.keys(headers).length) console.log(debug('\n-------HEADERS-------'));
    for (const k in headers) {
      console.log(`[${k}]: ${headers[k]}`);
    }
    if (Object.keys(headers).length) console.log(debug('-------END-HEADERS-------\n'));
    const response = await instance.post(
      endpoint,
      body,
      {
        headers
      }
    );
    console.log(debug('\n-------RESPONSE-------'));
    console.log(response.data);
    console.log(debug('-----END-RESPONSE----\n'));
    if (validation) {
      const {status = 200, schema = null} = validation;
      if (response.status === status) {
        expect(tv4.validate(response.data, schema)).to.be.true;
      }
    }
    return response;
  },
  get: async (endpoint, config = {}, validations) => {
    const {headers = {}} = config;
    console.log(info(`\nEndpoint: ${endpoint}`));
    if (Object.keys(headers).length) console.log(debug('\n-------HEADERS-------'));
    for (const k in headers) {
      console.log(`[${k}]: ${headers[k]}`);
    }
    if (Object.keys(headers).length) console.log(debug('-------END-HEADERS-------\n'));
    const response = await instance.get(
      endpoint,
      {
        headers
      }
    );
    console.log(debug('\n-------RESPONSE-------'));
    console.log(response.data);
    console.log(debug('-----END-RESPONSE----\n'));
    return response;
  }
}
