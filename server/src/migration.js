const db = require('./models');
const { Umzug, SequelizeStorage } = require('umzug');

const sequelize = db.sequelize;

const umzug = new Umzug({
  migrations: { glob: './src/migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  logger: {
    info: ({event, name, duration = ''}) => {
      console.log(`[${event.toUpperCase()}] - ${name} ${duration}`)
    },
    error: console.error
  }
});

let migrations = [];

const main = async () => {
  migrations = await umzug.pending();
  if(migrations.length) {
    console.log(' === Migrations Start 🏁  ===');
  } else {
    console.log(' === No migrations to run 🚜 ===');
  }
  await umzug.up();
}

main().then(() => {
  if(migrations.length) {
    console.log(' === Migrations Done ✅  ===');
  }
}).catch((e) => {
  console.error(e)
});