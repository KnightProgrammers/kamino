const { logger } = require('../utils');
// Error handling Middleware function for logging the error message
const errorLogger = (error, request, response, next) => {
  logger.error(error.message);
  const stack = error.stack.split('\n').map(function (line) { return line.trim(); });
  console.log(stack.splice(stack[0] === 'Error' ? 2 : 1).join('\n'));
  next(error) // calling next middleware
}

// Error handling Middleware function reads the error message
// and sends back a response in JSON format
const errorResponder = (error, request, res, next) => {
  res.header("Content-Type", 'application/json');
  if (error && error.error && error.error.isJoi) {
    res.status(400).json({
      status: 400,
      message: error.error.details[0].message
    });
    return;
  }
  const status = error.status || 500
  return res.status(status).send({ status, message: error.message });
}

// Fallback Middleware function for returning
// 404 error for undefined paths
const invalidPathHandler = (request, res) => {
  return res.status(404).send({
    status: 404,
    message: 'Invalid path'
  })
}

const errorBuilder = (message, status = 400) => {
  return {
    message,
    status
  };
}

const throwError = (message, status = 400) => {
  const error = new Error(message);
  error.status = status;
  throw error;
}


module.exports = {
  errorLogger,
  errorResponder,
  invalidPathHandler,
  errorBuilder,
  throwError
}
