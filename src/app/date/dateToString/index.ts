import { DateStringFormat } from '../types/dateStringFormat';
import { DateToStringOwn } from './impl/dateToStringOwn';
import { DateToStringFunction } from './util/dateToString.function';

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
 * const myDate = new Date(1996, 05, 27)
 * console.log(dateToString('dd-MM-yyyy', myDate)) // '27-06-1996'
 */
export function dateToString(
  stringFormat: DateStringFormat,
  date: Date = new Date()
): string {
  return new DateToStringFunction(new DateToStringOwn()).dateToString(
    stringFormat,
    date
  );
}
