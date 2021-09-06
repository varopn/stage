const repositories = require('../repositories');
const userService = require('./user-service')(repositories);

module.exports = { userService };
