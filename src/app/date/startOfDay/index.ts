import { StartOfDayDateFns } from './impl/startOfDayDateFns';
import { StartOfDayFunction } from './util/startOfDay.function';

/**
 *
 * Get the date you pass with time to 00:00:00:000.00
 *
 * @param {!Date} date - The date
 * @returns {!Date} - The date with init time
 */
export function startOfDay(date: Date): Date {
  return new StartOfDayFunction(new StartOfDayDateFns()).startOfDay(date);
}
