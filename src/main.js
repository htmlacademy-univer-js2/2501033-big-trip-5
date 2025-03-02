import TripPresenter from './presenter/trip-presenter.js';

const mainContainer = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter(mainContainer);

tripPresenter.init();
