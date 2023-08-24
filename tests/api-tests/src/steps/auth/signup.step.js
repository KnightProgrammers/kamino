const expect = require('chai').expect;
const apiCall = require("../../helpers/api-call");
const tv4 = require('tv4');

const SCHEMA = {
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    },
    "user": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        }
      },
      required: [
        'id',
        'name',
        'email'
      ]
    }
  },
  required: [
    'message',
    'user'
  ]
};

const ENDPOINT = '/api/auth/signup';
module.exports = async ({body = {}, headers = []}) => apiCall.post(ENDPOINT, {body, headers}, {
  status: 201,
  schema: SCHEMA
});
