const apiCall = require("../../helpers/api-call");

const SCHEMA = {
  "type": "object",
  properties: {
    "accessToken": {
      "type": "string"
    },
    "refreshToken": {
      "type": "string"
    }
  },
  required: [
    'accessToken',
    'refreshToken'
  ]
};

const ENDPOINT = '/api/auth/refreshtoken';
module.exports = async ({
                          body = {},
                          headers = {'Accept': 'application/json'}
                        }) => apiCall.post(ENDPOINT, body, headers, {
  status: 200,
  schema: SCHEMA
});
