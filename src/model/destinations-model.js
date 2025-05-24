export default class DestinationsModel {
  #service = null;
  #destinations = [];

  constructor({ service }) {
    this.#service = service;
    this.#destinations = this.#service.getDestinations();
  }

  getAll() {
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
