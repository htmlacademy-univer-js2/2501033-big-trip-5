import { render } from '../render.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import TripEventsView from '../view/trip-events-view.js';
import EventPointView from '../view/point-view.js';
import CreateFormView from '../view/create-form-view.js';
import EditFormView from '../view/edit-form-view.js';

export default class TripPresenter {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
  }

  init() {
    const filtersContainer = document.querySelector('.trip-controls__filters');
    render(new FiltersView(), filtersContainer);
    render(new SortView(), this.mainContainer);

    const tripEventsContainer = new TripEventsView();
    render(tripEventsContainer, this.mainContainer);

    render(new CreateFormView(), tripEventsContainer.getElement());
    render(new EditFormView(), tripEventsContainer.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventPointView(), tripEventsContainer.getElement());
    }
  }
}
