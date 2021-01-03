import { SubtractYearsDateFns } from './impl/subtractYearsDateFns';
import { SubtractYearsFunction } from './util/subtractYears.function';

/**
 *
 * Returns the date with the subtract of the years, by default the date is `new Date()`
 *
 * @param {!number} yearsToSubtract - The number of years to subtract
 * @param {Date} [date=new Date()] - The date to which the years are subtracted, by default is `new Date()`
 * @returns {Date} The date with subtracted years
 */
export function subtractYears(yearsToSubtract: number, date: Date = new Date()): Date {
  return new SubtractYearsFunction(new SubtractYearsDateFns()).subtractYears(
    yearsToSubtract,
    date
  );
}
