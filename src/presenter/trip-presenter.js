import { render, replace } from '../framework/render.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import TripEventsView from '../view/trip-events-view.js';
import EventPointView from '../view/point-view.js';
import EditFormView from '../view/edit-form-view.js';

export default class TripPresenter {
  constructor(mainContainer, tripModel) {
    this.mainContainer = mainContainer;
    this.tripModel = tripModel;
    this.tripEventsContainer = null;
  }

  init() {
    const filtersContainer = document.querySelector('.trip-controls__filters');
    render(new FiltersView(), filtersContainer);
    render(new SortView(), this.mainContainer);

    this.tripEventsContainer = new TripEventsView();
    render(this.tripEventsContainer, this.mainContainer);

    const points = this.tripModel.getPoints();
    points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const pointComponent = new EventPointView(point);
    const editFormComponent = new EditFormView(point);
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

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replace(pointComponent, editFormComponent);
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    render(pointComponent, this.tripEventsContainer.element);
  }
}
