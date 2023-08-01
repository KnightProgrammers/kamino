require('dotenv').config();
const express = require("express");
const cors = require("cors");
const {errorLogger, errorResponder, invalidPathHandler} = require("./middleware/errorHandler");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();

const corsOptions = {
  // origin: process.env.CORS_ORIGIN
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./models");

const forceDbSync = false;
// forceDbSync: true will drop the table if it already exists
db.sequelize.sync({force: forceDbSync}).then(() => {
  console.log(`Drop and Resync Database with { force: ${forceDbSync} }`);
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application" });
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

// function defined above (which logs the error)
app.use(errorLogger)

// Attach the second Error handling Middleware
// function defined above (which sends back the response)
app.use(errorResponder);

// Attach the fallback Middleware
// function which sends back the response for invalid paths)
// app.use(invalidPathHandler)
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
