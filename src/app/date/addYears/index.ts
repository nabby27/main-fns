import { AddYearsDateFns } from './impl/addYearsDateFns';
import { AddYearsFunction } from './util/addYears.function';

/**
 *
 * Returns the date with the sum of the years, by default the date is `new Date()`
 *
 * @param {!number} yearsToAdd - The number of years to increase
 * @param {Date} [date=new Date()] - The date to which years are added, by default is `new Date()`
 * @returns {Date} The date with the years added
 */
export function addYears(yearsToAdd: number, date: Date = new Date()): Date {
  return new AddYearsFunction(new AddYearsDateFns()).addYears(yearsToAdd, date);
}
