import { DateStringFormat } from '../types/dateStringFormat';
import { DateToStringDateFns } from './impl/dateToStringDateFns';
import { DateToStringFunction } from './util/dateToString.function';

/** @typedef {import('../types/dateStringFormat').DateStringFormat} DateStringFormat */

/**
 *
 * Return the date value as string format, by default the date is `new Date()`
 *
 * @param {!DateStringFormat} stringFormat - The format of string for date, {@link DateStringFormat} for more information.
 * @param {Date} [date=new Date()] - The date to transform on string, by default is `new Date()`
 * @returns {string} The date converted on string format
 *
 * @see {@link DateStringFormat}
 */
export function dateToString(
  stringFormat: DateStringFormat,
  date: Date = new Date()
): string {
  return new DateToStringFunction(new DateToStringDateFns()).dateToString(
    stringFormat,
    date
  );
}