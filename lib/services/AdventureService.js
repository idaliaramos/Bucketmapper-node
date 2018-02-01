const { isFunction } = require('../utils/LangUtils');
const { noop } = require('../utils/FunctionUtils');
const { pick, omit } = require('../utils/ObjectUtils');

class AdventureService {
  constructor({ adventureRepository, destinationRepository, logError }) {
    this._adventureRepository = adventureRepository;
    this._destinationRepository = destinationRepository;
  }

  async createForDestination(id, attributes) {
    try {
      const destination = await this._destinationRepository.getById(id);
      return await this._adventureRepository.create(
        Object.assign({}, attributes, {
          destinationId: id,
          userId: destination.userId
        })
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //finds adventure card by destination Id, returns all adventures that have destinationId
  async findByDestinationId(destinationId) {
    return await this._adventureRepository.findByAttribute(
      'destinationId',
      destinationId
    );
  }

  async getById(adventureId) {
    return await this._adventureRepository.findByAttribute('id', adventureId);
  }
  async delete(id) {
    return await this._adventureRepository.delete(id);
  }
  async update(id, attributes) {
    try {
      console.log(id, attributes, 'props');
      // const adventure = await this._adventureRepository.update(id, attributes);
      // if (!adventure) throw error;
      return await this._adventureRepository.update(id, attributes);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = AdventureService;
