const DestinationService = require('../services/DestinationService');
const UserRepository = require('../repositories/UserRepository');
const DestinationRepository = require('../repositories/DestinationRepository');

module.exports = new DestinationService({
  destinationValidator: require('./destinationValidator'),
  destinationRepository: new DestinationRepository(),
  userRepository: new UserRepository()
});
