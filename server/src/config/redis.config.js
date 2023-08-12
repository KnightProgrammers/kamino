require('dotenv').config();

module.exports = {
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6380'
};
