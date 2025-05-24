import AbstractView from '../framework/view/abstract-view.js';
import { createFilterTemplate } from '../template/filter-template.js';

export default class FilterView extends AbstractView {
  #filters = null;

  constructor ({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate({ filters: this.#filters });
  }
}
