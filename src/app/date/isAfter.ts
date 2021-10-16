/**
 *
 * @memberof module:Date
 * @function isAfter
 *
 * @description Check if the date is after the dateToCompare
 *
 * @param {!Date} date - The date
 * @param {!Date} dateToCompare - The date to compare
 * @returns {boolean} True if date is after the dateToCompare
 *
 * @example
 * import { isAfter } from 'main-fns';
 *
 * const myDate = new Date(1996, 05, 27);
 * const otherDate = new Date(2001, 02, 01);
 * console.log(isAfter(myDate, otherDate)); // false
 * console.log(isAfter(otherDate, myDate)); // true
 */
export function isAfter(
    date: Date,
    dateToCompare: Date
): boolean {
    return date.getTime() > dateToCompare.getTime();
}
