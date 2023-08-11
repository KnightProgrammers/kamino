require('dotenv').config();

const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  level: process.env.LOG_LEVEL.toLowerCase() || 'info',
  format: format.combine(
    format.printf(info => `[${info.level.toUpperCase()}]: ${info.message}`),
    format.colorize({all: true})
  ),
  transports: [
    new transports.Console()
  ]
});

module.exports = logger;
