const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {errorBuilder} = require("../middleware/errorHandler");
const RedisClient = require("../libraries/redis");
const newrelic = require("newrelic");

const verifyToken = async (token, key) => {
  return new Promise((resolve, reject) => jwt.verify(token, key, (err, decoded) => err ? reject({}) : resolve(decoded)));
}

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


  const refreshToken = jwt.sign({id: user.id},
    config.secret,
    {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: config.jwtRefreshExpiration
    });

  res.status(201).send({
    id: user.id,
    name: user.name,
    email: user.email,
    accessToken,
    refreshToken
  });
};

exports.refreshToken = async (req, res, next) => {
  const {refreshToken: requestToken} = req.body;

  if (!requestToken) {
    return next(errorBuilder('Refresh Token is required', 403, 'warn'));
  }

  try {
    const decoded = await verifyToken(requestToken, config.secret);
    const userId = decoded.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return next(errorBuilder('Unauthorized', 401, 'warn'));
      ;
    }
    req.userId = decoded.id;
    newrelic.setUserID(decoded.id);
    const newAccessToken = jwt.sign({id: userId}, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    await RedisClient.set(newAccessToken, userId, {
      'EX': config.jwtExpiration
    });

    const newRefreshToken = jwt.sign({id: userId},
      config.secret,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: config.jwtRefreshExpiration
      });
    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (_) {
    return next(errorBuilder('Refresh token expired', 403, 'warn'));
  }
};
