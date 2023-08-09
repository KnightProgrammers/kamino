var validator = require('validator');
const db = require("../models");
const {errorBuilder} = require("../middleware/errorHandler");
const User = db.user;

const checkDuplicateEmail = async (req, res, next) => {
  const {email} = req.body;
  const user = await User.findOne({
    where: { email }
  });
  if (user) {
    return next(errorBuilder('Email is already in use', 400));
  }
  next();
};

const checkValidEmail = async (req, res, next) => {
  const {email} = req.body;
  if (!validator.isEmail(email)) {
    return next(errorBuilder('Invalid email address', 400));
  }
  next();
};

const verifySignUp = {
  checkDuplicateEmail,
  checkValidEmail
};

module.exports = verifySignUp;
