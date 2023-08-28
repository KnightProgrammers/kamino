const expect = require('chai').expect;
const apiCall = require("../../helpers/api-call");
const tv4 = require('tv4');

const SCHEMA = {
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
};

const ENDPOINT = '/api/users/me';
module.exports = async ({headers = {}}) => apiCall.get(ENDPOINT, {headers}, {
  status: 200,
  schema: SCHEMA
});
