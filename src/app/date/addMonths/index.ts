import { AddMonthsOwn } from './impl/addMonthsOwn';
import { AddMonthsFunction } from './util/addMonths.function';

/**
 *
 * Returns the date with the sum of the months, by default the date is `new Date()`
 *
 * @param {!number} monthsToAdd - The number of months to increase
 * @param {Date} [date=new Date()] - The date to which months are added, by default is `new Date()`
 * @returns {Date} The date with the months added
 *
 * @example
 * const myDate = new Date(1996, 04, 27)
 * console.log(addMonths(1, myDate)) // Date(1996, 05, 27)
 */
export function addMonths(monthsToAdd: number, date: Date = new Date()): Date {
  return new AddMonthsFunction(new AddMonthsOwn()).addMonths(monthsToAdd, date);
}
