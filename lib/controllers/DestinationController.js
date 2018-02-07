const EntityController = require('./EntityController');

class DestinationController extends EntityController {
  constructor() {
    //require below to avoid circular dependecies
    const destinationService = require('../instances/destinationService');
    const userService = require('../instances/userService');
    super({
      entityName: 'Destination',
      entityService: destinationService,
      destinationService: destinationService,
      userService: userService
    });
    this._userService = userService;
    this._bindMethods(['findByUserId', 'createForUser']);
  }
  // finds the destinations that belong to the specific user requesting them
  async findByUserId(request, response, next) {
    try {
      const { id: userId } = request.params;
      const user = await this._userService.getById(userId);
      const destinations = await this._entityService.findByUserId(
        user.id,
        request.authenticatedUserId
      );
      response.json(destinations);
    } catch (error) {
      response.sendStatus(401);
    }
  }
  //creates a destination for specific user
  async createForUser(request, response, next) {
    try {
      const userId = request.params.id;
      let attributes = request.body;
      const user = await this._userService.getById(userId);

      const newDestination = await this._entityService.createForUser(
        user.id,
        attributes,
        request.authenticatedUserId
      );
      if (request.authenticatedUserId !== user.id) {
        response.sendStatus(401);
      }
      response.json(newDestination);
    } catch (error) {
      response.sendStatus(401);
    }
  }
  _bindMethods(methodNames) {
    methodNames.forEach(methodName => {
      this[methodName] = this[methodName].bind(this);
    });
  }
}

module.exports = DestinationController;
