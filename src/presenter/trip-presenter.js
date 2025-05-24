import { SortView, PointListView, EmptyListView } from '../view';
import { render } from '../framework/render.js';
import { PointPresenter } from '../presenter';
import { updateItem } from '../utils/common';

export default class TripPresenter {
  #pointListComponent = new PointListView();
  #emptyListComponent = new EmptyListView();
  #sortComponent = new SortView();
  #pointPresenters = new Map();
  #tripContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #points = [];

  constructor({ tripContainer, destinationsModel, offersModel, pointsModel }) {
    this.#tripContainer = tripContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;
    this.#points = [...this.#pointsModel.getAll()];
  }

  init() {
    this.#renderTrip();
  }

  #renderTrip = () => {
    if (!this.#points.length) {
      render(this.#emptyListComponent, this.#tripContainer);
      return;
    }

    this.#renderSort();
    this.#renderPointList();
    this.#renderPoints();
  };

  #renderSort = () => {
    render(this.#sortComponent, this.#tripContainer);
  };

  #renderPointList = () => {
    render(this.#pointListComponent, this.#tripContainer);
  };

  #renderPoints = () => {
    this.#points.forEach((point) => this.#renderPoint(point));
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter({
      container: this.#pointListComponent.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      handleDataChange: this.#handlePointChange,
      handleModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #clearPoints = () => {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  };

  #handlePointChange = (updatePoint) => {
    this.#points = updateItem(this.#points, updatePoint);
    this.#pointPresenters.get(updatePoint.id).init(updatePoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}
