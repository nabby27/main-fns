/**
 *
 * @memberof module:Date
 * @function isBefore
 *
 * @description Check if the date is before the dateToCompare
 *
 * @param {!Date} date - The date
 * @param {!Date} dateToCompare - The date to compare
 * @returns {boolean} True if date is before the dateToCompare
 *
 * @example
 * import { isBefore } from 'main-fns';
 *
 * const myDate = new Date(1996, 05, 27);
 * const otherDate = new Date(2001, 02, 01);
 * console.log(isBefore(myDate, otherDate)); // true
 * console.log(isBefore(otherDate, myDate)); // false
 */
export function isBefore(
    date: Date,
    dateToCompare: Date
): boolean {
    return date.getTime() < dateToCompare.getTime();
}
