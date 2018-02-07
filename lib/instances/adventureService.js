const AdventureService = require('../services/AdventureService');
const DestinationRepository = require('../repositories/DestinationRepository');
const AdventureRepository = require('../repositories/AdventureRepository');

module.exports = new AdventureService({
  adventureValidator: require('./adventureValidator'),
  adventureRepository: new AdventureRepository(),
  destinationRepository: new DestinationRepository()
});
