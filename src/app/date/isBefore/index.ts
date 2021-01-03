import { IsBeforeDateFns } from './impl/isBeforeDateFns';
import { IsBeforeFunction } from './util/isBefore.function';

/**
 *
 * Check if the date is before the dateToCompare
 *
 * @param {!Date} date - The date
 * @param {!Date} dateToCompare - The date to compare
 * @returns {boolean} True if date is before the dateToCompare
 */
export function isBefore(
  date: Date,
  dateToCompare: Date
): boolean {
  return new IsBeforeFunction(new IsBeforeDateFns()).isBefore(
    date,
    dateToCompare
  );
}
