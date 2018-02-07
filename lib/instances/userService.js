const UserService = require('../services/UserService');
const UserRepository = require('../repositories/UserRepository');

module.exports = new UserService({
  userValidator: require('./userValidator'),
  userRepository: new UserRepository()
});
