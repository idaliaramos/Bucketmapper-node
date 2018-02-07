const EntityRepository = require('./EntityRepository');

class AdventureRepository extends EntityRepository {
  constructor() {
    super({
      entityName: 'Adventure',
      db: require('../instances/defaultDatabase')
    });
  }
}
module.exports = AdventureRepository;
