import { IsBeforeDateFns } from './impl/isBeforeDateFns';
import { IsBeforeFunction } from './util/isBefore.function';

/**
 *
 * Check if the date is before the dateToCompare
 *
 * @param {!Date} date - The date
 * @param {!Date} dateToCompare - The date to compare
 * @returns {boolean} True if date is before the dateToCompare
 *
 * @example
 * const myDate = new Date(1996, 05, 27)
 * const otherDate = new Date(2001, 02, 01)
 * console.log(isAfter(myDate, otherDate)) // true
 * console.log(isAfter(otherDate, myDate)) // false
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
