const db = require("../models");
const {throwError} = require("../middleware/errorHandler");
const User = db.user;

exports.userMe = async (req, res) => {
  const userId = req.userId;
  const user = await User.findByPk(userId);

  if(!user) {
    throwError('User not found', 404);
  }

  res.status(200).send({
    id: user.id,
    name: user.name || '',
    email: user.email
  });
};
