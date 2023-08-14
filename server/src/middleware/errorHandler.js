const {logger} = require('../utils');


// Error handling Middleware function for logging the error message
const errorLogger = (error, request, response, next) => {
  logger[error.level || 'error'](error.stack);
  return next(error);
}

// Fallback Middleware function for returning
// 404 error for undefined paths
const invalidPathHandler = (request, res) => {
  return res.status(404).send({
    status: 404,
    message: 'Invalid path'
  });
}

const errorBuilder = (message, status = 400, level = 'error') => {
  const error = new Error(message);
  error.status = status;
  error.level = level;
  error.expected = level !== 'error';
  return error
}

module.exports = {
  errorLogger,
  invalidPathHandler,
  errorBuilder
}
