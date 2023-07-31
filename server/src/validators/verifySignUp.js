const db = require("../models");
const {errorBuilder} = require("../middleware/errorHandler");
const User = db.user;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  // Username
  let user = await User.findOne({
    where: {
      username: req.body.username
    }
  });
  if (user) {
    return next(errorBuilder('Username is already in use', 400));
  }

  // Email
  user = User.findOne({
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
