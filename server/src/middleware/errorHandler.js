// Error handling Middleware function for logging the error message
const errorLogger = (error, request, response, next) => {
  // console.log( `[Error] ${error.message}`)
  next(error) // calling next middleware
}

// Error handling Middleware function reads the error message
// and sends back a response in JSON format
const errorResponder = (error, request, res, next) => {
  res.header("Content-Type", 'application/json');
  const status = error.status || 400
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
