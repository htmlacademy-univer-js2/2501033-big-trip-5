import { createElement } from '../render.js';

export default class EventPointView {
  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    const {
      base_price,
      date_from,
      date_to,
      type,
      destination
    } = this.point;

    const cityName = destination ? destination.name : 'Chamonix';
    return `
      <li class="trip-events__item">
        <div class="event">
          <time class="event__date">${date_from}</time>
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" 
                 src="img/icons/${type}.png" alt="Event type icon">
          </div>
          <h3 class="event__title">${type} ${cityName}</h3>
          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time">${date_from}</time>
              &mdash;
              <time class="event__end-time">${date_to}</time>
            </p>
            <p class="event__duration">01H 10M</p>
          </div>
          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${base_price}</span>
          </p>
          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
            <!-- Если хотите вывести реальные офферы, нужно пробежаться по this.point.offers -->
          </ul>
          <button class="event__favorite-btn" type="button">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 ..."/>
            </svg>
          </button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
      </li>
    `;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
