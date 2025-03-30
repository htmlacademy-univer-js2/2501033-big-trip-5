import { points } from '../mock/points-mock.js';
import { destinations } from '../mock/destinations-mock.js';
import { offers } from '../mock/offers-mock.js';


function findDestinationById(destId) {
  return destinations.find((dest) => dest.id === destId) || null;
}

function findAllTypeOffers(type) {
  const offersByType = offers.find((o) => o.type === type);
  return offersByType ? offersByType.offers : []; 
}

function findOffersByIds(offerIds, allTypeOffers) {
  return allTypeOffers.filter((offer) => offerIds.includes(offer.id));
}

function createFinalPointData(rawPoint) {
  const destinationObj = findDestinationById(rawPoint.destination);

  const allTypeOffers = findAllTypeOffers(rawPoint.type);

  const selectedOffers = findOffersByIds(rawPoint.offers, allTypeOffers);

  return {
    ...rawPoint,
    destination: destinationObj,
    offers: selectedOffers,
  };
}

export default class TripModel {
  constructor() {
    this._points = points.map((p) => createFinalPointData(p));
  }

  getPoints() {
    return this._points;
  }
}
