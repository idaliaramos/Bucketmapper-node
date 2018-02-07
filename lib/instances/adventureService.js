const AdventureService = require('../services/AdventureService');
const DestinationRepository = require('../repositories/DestinationRepository');

module.exports = new AdventureService({
  adventureValidator: require('./adventureValidator'),
  adventureRepository: require('./adventureRepository'),
  destinationRepository: new DestinationRepository()
});
