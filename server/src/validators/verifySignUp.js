const db = require("../models");
const {errorBuilder} = require("../middleware/errorHandler");
const User = db.user;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  // Email
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  });
  if (user) {
    return next(errorBuilder('Email is already in use', 400));
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;
