/**
 *
 * @memberof module:Date
 * @function endOfDay
 *
 * @description Get the date you pass with time to 23:59:59:999
 *
 * @param {Date} [date=new Date()] - The date
 * @returns {!Date} - The date with end time, by default is `new Date()`
 *
 * @example
 * import { endOfDay } from 'main-fns';
 *
 * const myDate = new Date(1996, 05, 27, 22, 10, 10, 345);
 * console.log(endOfDay(myDate)); // Date(1996, 05, 27, 23, 59, 59, 999)
 */
export function endOfDay(date: Date = new Date()): Date {
    const result = new Date(date);
    result.setHours(23, 59, 59, 999);

    return result;
}
