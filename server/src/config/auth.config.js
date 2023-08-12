module.exports = {
  secret: process.env.SECRET || 'THIS IS A SECRET',
  jwtExpiration: 3600,           // 1 hour
  jwtRefreshExpiration: 86400,   // 24 hours
};
