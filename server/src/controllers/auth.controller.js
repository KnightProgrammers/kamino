const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const RefreshToken = db.refreshToken;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {errorBuilder} = require("../middleware/errorHandler");
const RedisClient = require("../libraries/redis");

exports.signup = async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
  res.status(201).send({
    message: "User registered successfully",
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};

exports.signin = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })
  if (!user) {
    return next(errorBuilder('Bad credentials', 401, 'warn'));
  }

  const passwordIsValid = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!passwordIsValid) {
    return next(errorBuilder('Bad credentials', 401, 'warn'));
  }

  const accessToken = jwt.sign({id: user.id},
    config.secret,
    {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: config.jwtExpiration
    });

  RedisClient.set(accessToken, user.id, {
    'EX': config.jwtExpiration
  });

  let refreshToken = await RefreshToken.createToken(user);

  res.status(201).send({
    id: user.id,
    name: user.name,
    email: user.email,
    accessToken,
    refreshToken
  });
};

exports.refreshToken = async (req, res, next) => {
  const { refreshToken: requestToken } = req.body;

  if (!requestToken) {
    return next(errorBuilder('Refresh Token is required', 403, 'warn'));
  }
  let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });
  if (!refreshToken) {
    return next(errorBuilder('Refresh token is not in database', 403, 'warn'));
  }

  if (RefreshToken.verifyExpiration(refreshToken)) {
    RefreshToken.destroy({ where: { id: refreshToken.id } });
    return next(errorBuilder('Refresh token expired', 403, 'warn'));
  }

  let newAccessToken = jwt.sign({ id: refreshToken.userId }, config.secret, {
    expiresIn: config.jwtExpiration,
  });

  await RedisClient.set(newAccessToken, refreshToken.userId, {
    'EX': config.jwtExpiration
  });

  return res.status(200).json({
    accessToken: newAccessToken,
    refreshToken: refreshToken.token,
  });
};
