import { POINT_SORTS } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { createSortTemplate } from '../template/sort-template.js';

export default class SortView extends AbstractView {
  get template() {
    return createSortTemplate({ sorts: POINT_SORTS });
  }
}
