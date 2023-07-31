const db = require("../models");
const {throwError} = require("../middleware/errorHandler");
const User = db.user;

exports.userMe = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findByPk(userId);

  if(!user) {
    throwError('User not found', 404);
  }

  res.status(200).send({
    id: user.id,
    username: user.username,
    email: user.email
  });
};
