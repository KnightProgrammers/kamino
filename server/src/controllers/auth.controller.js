const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const RefreshToken = db.refreshToken;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {throwError} = require("../middleware/errorHandler");

exports.signup = async (req, res) => {
  // Save User to Database
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
  res.send({
    message: "User registered successfully",
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};

exports.signin = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })
  if (!user) {
    throwError('Bad credentials', 401);
  }

  const passwordIsValid = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!passwordIsValid) {
    throwError('Bad credentials', 401);
  }

  const accessToken = jwt.sign({id: user.id},
    config.secret,
    {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });

  let refreshToken = await RefreshToken.createToken(user);

  res.status(200).send({
    id: user.id,
    name: user.name,
    email: user.email,
    accessToken,
    refreshToken
  });
};

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    throwError('Refresh Token is required', 403);
  }
  let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });
  if (!refreshToken) {
    throwError('Refresh token is not in database', 403);
  }

  if (RefreshToken.verifyExpiration(refreshToken)) {
    await RefreshToken.destroy({ where: { id: refreshToken.id } });
    throwError('Refresh token expired', 403);
  }

  const user = await refreshToken.getUser();
  let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: config.jwtExpiration,
  });

  return res.status(200).json({
    accessToken: newAccessToken,
    refreshToken: refreshToken.token,
  });
};
