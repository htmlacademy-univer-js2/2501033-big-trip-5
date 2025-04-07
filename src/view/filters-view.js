import AbstractView from '../framework/view/abstract-view.js';

export default class FiltersView extends AbstractView {
  constructor(filtersInfo) {
    super();
    this.filtersInfo = filtersInfo;
  }

  get template() {
    const { everything, future, present, past } = this.filtersInfo;

    return `
      <form class="trip-filters" action="#" method="get">
        <div class="trip-filters__filter">
          <input
            id="filter-everything"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="everything"
            ${everything.isDisabled ? 'disabled' : ''}
            checked
          >
          <label class="trip-filters__filter-label" for="filter-everything">
            ${everything.name} (${everything.count})
          </label>
        </div>

        <div class="trip-filters__filter">
          <input
            id="filter-future"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="future"
            ${future.isDisabled ? 'disabled' : ''}
          >
          <label class="trip-filters__filter-label" for="filter-future">
            ${future.name} (${future.count})
          </label>
        </div>

        <div class="trip-filters__filter">
          <input
            id="filter-present"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="present"
            ${present.isDisabled ? 'disabled' : ''}
          >
          <label class="trip-filters__filter-label" for="filter-present">
            ${present.name} (${present.count})
          </label>
        </div>

        <div class="trip-filters__filter">
          <input
            id="filter-past"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="past"
            ${past.isDisabled ? 'disabled' : ''}
          >
          <label class="trip-filters__filter-label" for="filter-past">
            ${past.name} (${past.count})
          </label>
        </div>

        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>
    `;
  }
}
