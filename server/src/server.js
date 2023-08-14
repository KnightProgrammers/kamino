require('dotenv').config();

const fs = require('fs');
const express = require("express");
const cors = require("cors");
if (process.env.ENVIRONMENT === 'production') {
  require('newrelic');
}
const {errorLogger, errorResponder, invalidPathHandler} = require("./middleware/errorHandler");
const httpLogger = require('./middleware/httpLogger');
const logger = require('./utils/logger');
const swaggerUi = require('swagger-ui-express');

const YAML = require('yaml');
const swaggerFile = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(swaggerFile);

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// database
const db = require("./models");
const forceDbSync = !!JSON.parse(process.env.FORCE_DB_SYNC || false);
// forceDbSync: true will drop the table if it already exists
db.sequelize.sync({force: forceDbSync}).then(() => {
  logger.debug(`Drop and Resync Database with { force: ${forceDbSync} }`);
});

app.use(httpLogger);
app.get("/", (req, res) => {
  res.json({message: "Welcome to the application"});
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routes
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/user.routes');
const healthRouter = require('./routes/health.routes');

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api', healthRouter);

app.use('*', invalidPathHandler);

app.use(errorLogger);

app.use(async (error, req, res, next) => {
  if (error && error.error && error.error.isJoi) {
    return res.status(400).json({
      status: 400,
      message: error.error.details[0].message
    });
  }
  const status = error.status || 500
  return res.status(status).json({status, message: error.message});
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
  if (!!process.env.ENVIRONMENT) {
    logger.debug('---------------------------------');
    logger.debug(`Environment: ${process.env.ENVIRONMENT}`)
    logger.debug('---------------------------------');
  }
});
