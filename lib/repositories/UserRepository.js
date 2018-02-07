const EntityRepository = require('./EntityRepository');

class UserRepository extends EntityRepository {
  constructor() {
    super({
      entityName: 'User',
      db: require('../instances/defaultDatabase')
    });
  }
}
module.exports = UserRepository;
