//in the entity controller I handle the middleware requests

const Boom = require('boom');
const { pluralize } = require('../utils/StringUtils');

class EntityController {
  constructor({ entityName, entityService }) {
    this._entityName = entityName;
    this._entityService = entityService;
    this._bindMethods(['create', 'getAll', 'getById', 'update', 'delete']);
  }
  //creates a new entity and adds them to the db
  async create(request, response, next) {
    try {
      const entity = await this._entityService.create(request.body);
      if (!entity) {
        response
          .status(400)
          .send(
            'error: please use unique email and provide name, email and password '
          );
      }
      response
        .sendStatus(201)
        .set(
          'Location',
          `/${pluralize(this._entityName.toLowerCase())}/${entity.id}`
        )
        .json(entity);
    } catch (error) {
      response.status(400).send('whoops! server error');
    }
  }
  //gets all the enitities (could be users, destination or adventure cards) and returns them
  async getAll(request, response, next) {
    try {
      const entities = await this._entityService.getAll({
        userId: request.authenticatedUserId
      });
      response.json(entities);
    } catch (error) {
      console.log(error);
    }
  }
  //gets entity by id and return it
  async getById(request, response, next) {
    try {
      const id = parseInt(request.params.id);
      let entity = await this._entityService.getById(
        id,
        request.authenticatedUserId,
        response
      );
      entity = Object.assign({}, entity);

      response.json(entity);
    } catch (error) {
      return response.sendStatus(500);
      //TODO add logging
    }
  }
  //updates the entity if they are authorized
  async update(request, response, next) {
    try {
      const id = parseInt(request.params.id);
      const userId = request.authenticatedUserId;
      const entity = await this._entityService.update(id, request.body, userId);
      if (!entity) {
        response.sendStatus(401);
      }
      response.json(entity);
      //fix, am gettng enitity but not sending back
    } catch (error) {
      console.log(error, 'this is the error');
      // next(this._convertError(error));
    }
  }
  //deletes entitiey
  async delete(request, response, next) {
    try {
      const id = parseInt(request.params.id);
      const entity = await this._entityService.delete(id, {
        userId: request.authenticatedUserId
      });
      //if the auth id and the user id dont match returns 'Unauthorized'
      if (request.authenticatedUserId !== entity.userId) {
        return response.status(401).send('Unauthorized');
      }
      //check add
      response.json(entity);
    } catch (error) {
      response.status(401).send('Unauthorized');
    }
  }

  _bindMethods(methodNames) {
    methodNames.forEach(methodName => {
      this[methodName] = this[methodName].bind(this);
    });
  }

  _convertError(error) {
    if (error.message.endsWith('Service.ERROR_INVALID_INPUT')) {
      return Boom.badRequest(error.message);
    }
    if (error.message.endsWith('Service.ERROR_PERMISSION_DENIED')) {
      return Boom.forbidden(error.message);
    }
    if (error.message.endsWith('Service.ERROR_NOT_FOUND')) {
      return Boom.notFound(error.message);
    }
    if (error.message.endsWith('Service.ERROR_UNEXPECTED')) {
      return Boom.badImplementation(error.message);
    }
    return Boom.badImplementation();
  }
}

module.exports = EntityController;
