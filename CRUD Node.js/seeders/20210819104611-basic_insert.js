'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        age: 10,
        additional_info: 'Full Stack developer',
      },
      {
        name: 'Bob',
        age: 20,
        additional_info: 'Manual QA',
      },
      {
        name: 'Alex',
        age: 30,
        additional_info: 'QA Lead',
      },
      {
        name: 'Leo',
        age: 33,
        additional_info: 'Dev-Ops engineer',
      },
      {
        name: 'Arnold',
        age: 45,
        additional_info: 'Angular developer',
      },
      {
        name: 'Jim',
        age: 78,
        additional_info: 'QA trainee',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
