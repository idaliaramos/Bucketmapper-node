const Boom = require('boom');
const authenticationService = require('../instances/authenticationService');
class AuthenticationController {
  constructor() {
    this._authenticationService = authenticationService;
    this.authenticate = this.authenticate.bind(this);
  }
  //authenticates the user and returns a token or an invalid query response
  async authenticate(request, response, next) {
    try {
      const userInfo = request.body;
      // if (userInfo.name === undefined || userInfo.email === undefined) {
      //   throw Boom.badRequest('invalid query');
      // }
      const token = await this._authenticationService.authenticate(userInfo);
      if (!token) {
        throw Boom.badRequest('invalid query');
      }
      response.json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthenticationController;
