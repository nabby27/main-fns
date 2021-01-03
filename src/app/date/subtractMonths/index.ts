import { SubtractMonthsDateFns } from './impl/subtractMonthsDateFns';
import { SubtractMonthsFunction } from './util/subtractMonths.function';

/**
 *
 * Returns the date with the subtract of the months, by default the date is `new Date()`
 *
 * @param {!number} monthsToSubtract - The number of months to subtract
 * @param {Date} [date=new Date()] - The date to which the months are subtracted, by default is `new Date()`
 * @returns {Date} The date with subtracted months
 */
export function subtractMonths(monthsToSubtract: number, date: Date = new Date()): Date {
  return new SubtractMonthsFunction(new SubtractMonthsDateFns()).subtractMonths(
    monthsToSubtract,
    date
  );
}
