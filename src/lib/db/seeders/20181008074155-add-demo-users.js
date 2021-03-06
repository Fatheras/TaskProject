"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [];

    for (let index = 0; index < 10; index++) {
      users.push(
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          password: faker.internet.password(),
        },
      );

    }

    return queryInterface.bulkInsert("users", users, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
