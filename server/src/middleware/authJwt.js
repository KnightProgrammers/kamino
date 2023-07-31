const jwt = require("jsonwebtoken");
const { TokenExpiredError } = jwt;
const config = require("../config/auth.config.js");
const db = require("../models");
const {errorBuilder} = require("./errorHandler");
const User = db.user;

const verifyUser = async (userId) => {
  const user = await User.findByPk(userId);
  return !!user;
}

const catchError = (err, res, next) => {
  if (err instanceof TokenExpiredError) {
    next(errorBuilder('Unauthorized - Access Token was expired', 401));
  }
  next(errorBuilder('Unauthorized', 401));
}

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return next(errorBuilder('No token provided', 403));
  }
  jwt.verify(token,
    config.secret,
    async (err, decoded) => {
      if (err) {
        return next(errorBuilder('Unauthorized', 401));
      }
      const userExist = await verifyUser(decoded.id);
      if (!userExist) return next(errorBuilder('Unauthorized', 401));
      req.userId = decoded.id;
      next();
    });
};

const authJwt = {
  verifyToken,
  catchError
};
module.exports = authJwt;
