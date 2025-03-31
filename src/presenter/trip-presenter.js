import { render } from '../render.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import TripEventsView from '../view/trip-events-view.js';
import EventPointView from '../view/point-view.js';
import CreateFormView from '../view/create-form-view.js';
import EditFormView from '../view/edit-form-view.js';

export default class TripPresenter {
  constructor(mainContainer, tripModel) {
    this.mainContainer = mainContainer;
    this.tripModel = tripModel;
  }

  init() {
    const filtersContainer = document.querySelector('.trip-controls__filters');
    render(new FiltersView(), filtersContainer);
    render(new SortView(), this.mainContainer);

    const tripEventsContainer = new TripEventsView();
    render(tripEventsContainer, this.mainContainer);

    const points = this.tripModel.getPoints();

    if (points.length > 0) {
      render(new EditFormView(points[0]), tripEventsContainer.getElement());
    }

    points.forEach((point) => {
      render(new EventPointView(point), tripEventsContainer.getElement());
    });
  }
}
