const DestinationService = require('../services/DestinationService');
const UserRepository = require('../repositories/UserRepository');

module.exports = new DestinationService({
  destinationValidator: require('./destinationValidator'),
  destinationRepository: require('./destinationRepository'),
  userRepository: new UserRepository()
});
