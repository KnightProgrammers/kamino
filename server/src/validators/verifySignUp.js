const db = require("../models");
const {errorBuilder} = require("../middleware/errorHandler");
const User = db.user;

const checkDuplicateEmail = async (req, res, next) => {
  const {email} = req.body;
  const user = await User.findOne({
    where: {email}
  });
  if (user) {
    return next(errorBuilder('Email is already in use', 400, 'warn'));
  }
  next();
};

const verifySignUp = {
  checkDuplicateEmail
};

module.exports = verifySignUp;
