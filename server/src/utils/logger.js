require('dotenv').config();

const { createLogger, transports, format } = require('winston');
const config = require('../config/log.config');

const logger = createLogger({
  level: config.LOG_LEVEL.toLowerCase(),
  format: format.combine(
    format.printf(info => `[${info.level.toUpperCase()}]: ${info.message}`),
    format.colorize({all: true})
  ),
  transports: [
    new transports.Console()
  ]
});

module.exports = logger;
