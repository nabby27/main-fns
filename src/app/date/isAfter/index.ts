import { IsAfterDateFns } from './impl/isAfterDateFns';
import { IsAfterFunction } from './util/isAfter.function';

/**
 *
 * Check if the date is after the dateToCompare
 *
 * @param {!Date} date - The date
 * @param {!Date} dateToCompare - The date to compare
 * @returns {boolean} True if date is after the dateToCompare
 */
export function isAfter(
  date: Date,
  dateToCompare: Date
): boolean {
  return new IsAfterFunction(new IsAfterDateFns()).isAfter(
    date,
    dateToCompare
  );
}
