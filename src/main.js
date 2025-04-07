import TripPresenter from './presenter/trip-presenter.js';
import TripModel from './model/trip-model.js';

const mainContainer = document.querySelector('.trip-events');
const tripModel = new TripModel();

const tripPresenter = new TripPresenter(mainContainer, tripModel);
tripPresenter.init();
