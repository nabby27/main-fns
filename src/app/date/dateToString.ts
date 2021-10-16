import { DateStringFormat } from './types/dateStringFormat';

/**
 *
 * @memberof module:Date
 * @function dateToString
 *
 * @description Return the date value as string format, by default the date is `new Date()`
 *
 * @param {!DateStringFormat} stringFormat - The format of string for date, {@link DateStringFormat} for more information.
 * @param {Date} [date=new Date()] - The date to transform on string, by default is `new Date()`
 * @returns {string} The date converted on string format
 *
 * @see {@link DateStringFormat}
 *
 * @example
 * import { dateToString } from 'main-fns';
 *
 * const myDate = new Date(1996, 05, 27);
 * console.log(dateToString('dd-MM-yyyy', myDate)); // '27-06-1996'
 */
export function dateToString(
    stringFormat: DateStringFormat,
    date: Date = new Date()
): string {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return stringFormat
        .replace('yyyy', year.toString())
        .replace('MM', ('0' + (month + 1)).slice(-2))
        .replace('dd', ('0' + day).slice(-2));
}
