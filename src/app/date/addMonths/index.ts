import { AddMonthsDateFns } from './impl/addMonthsDateFns';
import { AddMonthsFunction } from './util/addMonths.function';

/**
 *
 * Returns the date with the sum of the months, by default the date is `new Date()`
 *
 * @param {!number} monthsToAdd - The number of months to increase
 * @param {Date} [date=new Date()] - The date to which months are added, by default is `new Date()`
 * @returns {Date} The date with the months added
 */
export function addMonths(monthsToAdd: number, date: Date = new Date()): Date {
  return new AddMonthsFunction(new AddMonthsDateFns()).addMonths(monthsToAdd, date);
}
