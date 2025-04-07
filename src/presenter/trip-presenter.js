import { render, replace } from '../framework/render.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import TripEventsView from '../view/trip-events-view.js';
import EventPointView from '../view/point-view.js';
import EditFormView from '../view/edit-form-view.js';
import NoPointsView from '../view/no-points-view.js';

export default class TripPresenter {
  constructor(mainContainer, tripModel) {
    this.mainContainer = mainContainer;
    this.tripModel = tripModel;
    this.tripEventsContainer = null;
  }

  init() {
    const points = this.tripModel.getPoints();

    const filtersInfo = {
      everything: { name: 'Everything', count: points.length, isDisabled: points.length === 0 },
      future:     { name: 'Future', count: 2, isDisabled: false },
      present:    { name: 'Present', count: 0, isDisabled: true },
      past:       { name: 'Past', count: 3, isDisabled: false },
    };

    const filtersContainer = document.querySelector('.trip-controls__filters');
    render(new FiltersView(filtersInfo), filtersContainer);

    render(new SortView(), this.mainContainer);

    if (points.length === 0) {
      render(new NoPointsView('Click New Event to create your first point'), this.mainContainer);
      return;
    }

    this.tripEventsContainer = new TripEventsView();
    render(this.tripEventsContainer, this.mainContainer);

    points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const pointComponent = new EventPointView(point);
    const editFormComponent = new EditFormView(point);

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replace(pointComponent, editFormComponent);
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.setRollupClickHandler(() => {
      replace(editFormComponent, pointComponent);
      document.addEventListener('keydown', onEscKeyDown);
    });

    editFormComponent.setFormSubmitHandler(() => {
      replace(pointComponent, editFormComponent);
      document.removeEventListener('keydown', onEscKeyDown);
    });

    editFormComponent.setRollupClickHandler(() => {
      replace(pointComponent, editFormComponent);
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(pointComponent, this.tripEventsContainer.element);
  }
}
