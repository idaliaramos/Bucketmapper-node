const EntityRepository = require('./EntityRepository');

class DestinationRepository extends EntityRepository {
  constructor() {
    super({
      entityName: 'Destination',
      db: require('../instances/defaultDatabase')
    });
  }
}
module.exports = DestinationRepository;
