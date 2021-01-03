import { EndOfDayDateFns } from './impl/endOfDayDateFns';
import { EndOfDayFunction } from './util/endOfDay.function';

/**
 *
 * Get the date you pass with time to 23:59:59:999.99
 *
 * @param {!Date} date - The date
 * @returns {!Date} - The date with end time
 */
export function endOfDay(date: Date): Date {
  return new EndOfDayFunction(new EndOfDayDateFns()).endOfDay(date);
}
