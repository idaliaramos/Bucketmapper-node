const EntityController = require('./EntityController');

class AdventureController extends EntityController {
  constructor() {
    //require below to avoid circular dependecies
    const adventureService = require('../instances/adventureService');
    const destinationService = require('../instances/destinationService');
    super({
      entityName: 'Adventure',
      entityService: adventureService,
      adventureService: adventureService,
      destinationService: destinationService
    });
    this._destinationService = destinationService;
    this._bindMethods(['createForDestination', 'findByDestinationId']);
  }
  //finds the destination and returns the adventures that belong to it
  async findByDestinationId(request, response, next) {
    try {
      const { id: destinationId } = request.params;
      const adventures = await this._entityService.findByDestinationId(
        destinationId
      );

      response.json(adventures);
    } catch (error) {
      console.log(error);
    }
  }
  //creates an adventure card for the specific destination
  async createForDestination(request, response, next) {
    try {
      const { id: destinationId } = request.params;
      let attributes = request.body;
      const newAdventure = await this._entityService.createForDestination(
        destinationId,
        attributes
      );
      response.json(newAdventure);
    } catch (error) {
      console.log(error);
    }
  }
  _bindMethods(methodNames) {
    methodNames.forEach(methodName => {
      this[methodName] = this[methodName].bind(this);
    });
  }
}

module.exports = AdventureController;
