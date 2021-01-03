import { AddDaysDateFns } from './impl/addDaysDateFns';
import { AddDaysFunction } from './util/addDays.function';

/**
 *
 * Returns the date with the sum of the days, by default the date is `new Date()`
 *
 * @param {!number} daysToAdd - The number of days to increase
 * @param {Date} [date=new Date()] - The date to which days are added, by default is `new Date()`
 * @returns {Date} The date with the days added
 */
export function addDays(daysToAdd: number, date: Date = new Date()): Date {
  return new AddDaysFunction(new AddDaysDateFns()).addDays(daysToAdd, date);
}
