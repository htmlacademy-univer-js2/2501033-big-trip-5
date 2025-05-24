import { filter } from '../utils/filter';

export const generateFilters = (points) =>
  Object.entries(filter).map(([filterType, filterPoints]) => ({
    type: filterType,
    isDisabled: !filterPoints(points).length,
  }));
