require('dotenv').config();

const {createClient} = require("redis");
const logger = require("../utils/logger");
const config = require("../config/auth.config");

class RedisClient {
  client = null;
  noConnection = 0;

  static async _getClient() {
    if (RedisClient.noConnection === undefined) {
      RedisClient.noConnection = 0;
    }
    try {
      if (!RedisClient.client && RedisClient.noConnection < 3) {
        RedisClient.client = createClient({
          url: process.env.REDIS_URL || 'redis://localhost:6380'
        });
        RedisClient.client.on('error', err => {
          logger.warn('Redis Client Error', err);
          RedisClient.noConnection += 1;
          throw Error('Redis Client Error');
        });
        await RedisClient.client.connect();
      }
    } catch (_) {
      RedisClient.client = null;
    }
    return RedisClient.client;
  }
  static async set(key, value, options = {}) {
    const redisClient = await RedisClient._getClient();

    if (redisClient) {
      await redisClient.set(key, value, options);
    }
  }
  static async get(key, options = {}) {
    const redisClient = await RedisClient._getClient();

    if (redisClient) {
      await redisClient.get(key, options);
    }
  }
}

module.exports = RedisClient;
