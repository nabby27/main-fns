import { AddDaysOwn } from './impl/addDaysOwn';
import { AddDaysFunction } from './util/addDays.function';

/**
 *
 * @memberof module:Date
 * @function addDays
 *
 * @description Returns the date with the sum of the days, by default the date is `new Date()`
 *
 * @param {!number} daysToAdd - The number of days to increase
 * @param {Date} [date=new Date()] - The date to which days are added, by default is `new Date()`
 * @returns {Date} The date with the days added
 *
 * @example
 * import { addDays } from 'main-fns';
 *
 * const myDate = new Date(1996, 05, 26);
 * console.log(addDays(1, myDate)); // Date(1996, 05, 27)
 */
export function addDays(daysToAdd: number, date: Date = new Date()): Date {
    return new AddDaysFunction(new AddDaysOwn()).addDays(daysToAdd, date);
}
