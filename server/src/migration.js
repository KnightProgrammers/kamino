const db = require('./models');
const { Umzug, SequelizeStorage } = require('umzug');

const sequelize = db.sequelize;

const umzug = new Umzug({
  migrations: { glob: './src/migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  logger: console,
});

(async () => {
  const migrations = await umzug.pending();
  console.log(migrations);
  try {
    await umzug.up();
  } catch (e) {
    console.log(e)
  }
})();