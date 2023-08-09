const Joi = require("joi");
const validator = require('express-joi-validation').createValidator({passError: true});

const BODY_CONF = {
  joi: { convert: true, allowUnknown: false, abortEarly: true }
};

const signupSchema = Joi.object({
  name: Joi.string().trim(true).required().label("Name"),
  email: Joi.string().email().trim(true).required().label("Email"),
  password: Joi.string().required().label("Password")
}).required();

const loginSchema = Joi.object({
  email: Joi.string().email().trim(true).required().label("Email"),
  password: Joi.string().required().label("Password")
}).required();

const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().uuid({version: 'uuidv4'}).trim(true).required().label("Refresh Token"),
}).required();

module.exports = {
  signupValidator: validator.body(signupSchema,BODY_CONF),
  loginValidator: validator.body(loginSchema,BODY_CONF),
  refreshTokenValidator: validator.body(refreshTokenSchema,BODY_CONF)
}
