const {faker} = require('@faker-js/faker');
module.exports = {
  fullName: () => faker.person.fullName(),
  email: () => faker.internet.email({provider: `${Date.now().toString()}.com`}),
  password: () => faker.internet.password(),
};
