const apiCall = require("../../helpers/api-call");

const SCHEMA = {
  "type": "object",
  properties: {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "accessToken": {
      "type": "string"
    },
    "refreshToken": {
      "type": "string"
    }
  },
  required: [
    'id',
    'name',
    'email',
    'accessToken',
    'refreshToken'
  ]
};

const ENDPOINT = '/api/auth/signin';
module.exports = async ({
                          body = {},
                          headers = {'Accept': 'application/json'}
                        }) => apiCall.post(ENDPOINT, body, headers, {
  status: 201,
  schema: SCHEMA
});
