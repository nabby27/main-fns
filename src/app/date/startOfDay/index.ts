import { StartOfDayDateFns } from './impl/startOfDayDateFns';
import { StartOfDayFunction } from './util/startOfDay.function';

/**
 *
 * Get the date you pass with time to 00:00:00:000
 *
 * @param {Date} [date=new Date()] - The date
 * @returns {!Date} - The date with init time, by default is `new Date()`
 *
 * @example
 * const myDate = new Date(1996, 05, 27, 22, 10, 10, 345)
 * console.log(endOfDay(myDate)) // Date(1996, 05, 27, 00, 00, 00, 000)
 */
export function startOfDay(date: Date = new Date()): Date {
  return new StartOfDayFunction(new StartOfDayDateFns()).startOfDay(date);
}
