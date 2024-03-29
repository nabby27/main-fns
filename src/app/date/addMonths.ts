/**
 *
 * @memberof module:Date
 * @function addMonths
 *
 * @description Returns the date with the sum of the months, by default the date is `new Date()`
 *
 * @param {!number} monthsToAdd - The number of months to increase
 * @param {Date} [date=new Date()] - The date to which months are added, by default is `new Date()`
 * @returns {Date} The date with the months added
 *
 * @example
 * import { addMonths } from 'main-fns';
 *
 * const myDate = new Date(1996, 04, 27)
 * console.log(addMonths(1, myDate)) // Date(1996, 05, 27)
 */
export function addMonths(monthsToAdd: number, date: Date = new Date()): Date {
    const result = new Date(date);
    result.setMonth(result.getMonth() + Math.abs(monthsToAdd));

    return result;
}
