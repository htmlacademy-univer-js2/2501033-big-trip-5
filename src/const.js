export const TimePeriods = {
  MSEC_IN_SEC: 1000,
  MSEC_IN_HOUR: 60 * 60 * 1000,
  MSEC_IN_DAY: 24 * 60 * 60 * 1000
};

export const PointFilters = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

export const Mode = {
  DEFAULT: 'default',
  EDITING: 'editing',
};

export const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

export const POINT_TYPES = [
  'taxi',
  'flight',
  'bus',
  'train',
  'ship',
  'drive',
  'check-in',
  'sightseeing',
  'restaurant',
];

export const POINT_SORTS = [
  { type: 'day', isDisabled: false },
  { type: 'event', isDisabled: true },
  { type: 'time', isDisabled: false },
  { type: 'price', isDisabled: false },
  { type: 'offers', isDisabled: true },
];

export const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: null,
};
