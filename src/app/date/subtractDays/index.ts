import { SubtractDaysDateFns } from './impl/subtractDaysDateFns';
import { SubtractDaysFunction } from './util/subtractDays.function';

/**
 *
 * Returns the date with the subtract of the days, by default the date is `new Date()`
 *
 * @param {!number} daysToSubtract - The number of days to subtract
 * @param {Date} [date=new Date()] - The date to which days are subtracted, by default is `new Date()`
 * @returns {Date} The date with subtracted days
 *
 * @example
 * const myDate = new Date(1996, 05, 28)
 * console.log(subtractDays(1, myDate)) // Date(1996, 05, 27)
 */
export function subtractDays(daysToSubtract: number, date: Date = new Date()): Date {
  return new SubtractDaysFunction(new SubtractDaysDateFns()).subtractDays(daysToSubtract, date);
}
