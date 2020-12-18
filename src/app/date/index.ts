import { DateUtilMoment } from './impl/dateUtilMoment';
import { DateStringFormat } from './types/dateStringFormat';
import { DateFunctions } from './util/date.function';

/**
 * @module dates
 */

/** @typedef {import('./types/dateStringFormat').DateStringFormat} DateStringFormat */

/**
 *
 * Returns the date with the sum of the days, by default the date is `new Date()`
 *
 * @param {!number} daysToAdd - The number of days to increase
 * @param {Date} [date=new Date()] - The date to which days are added, by default is `new Date()`
 * @returns {Date} The date with the days added
 */
export function addDays(daysToAdd: number, date: Date = new Date()): Date {
  return new DateFunctions(new DateUtilMoment()).addDays(daysToAdd, date);
}

/**
 *
 * Returns the date with the sum of the months, by default the date is `new Date()`
 *
 * @param {!number} monthsToAdd - The number of months to increase
 * @param {Date} [date=new Date()] - The date to which months are added, by default is `new Date()`
 * @returns {Date} The date with the months added
 */
export function addMonths(monthsToAdd: number, date: Date = new Date()): Date {
  return new DateFunctions(new DateUtilMoment()).addMonths(monthsToAdd, date);
}

/**
 *
 * Returns the date with the sum of the years, by default the date is `new Date()`
 *
 * @param {!number} yearsToAdd - The number of years to increase
 * @param {Date} [date=new Date()] - The date to which years are added, by default is `new Date()`
 * @returns {Date} The date with the years added
 */
export function addYears(yearsToAdd: number, date: Date = new Date()): Date {
  return new DateFunctions(new DateUtilMoment()).addYears(yearsToAdd, date);
}

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
  return new DateFunctions(new DateUtilMoment()).dateToString(
    stringFormat,
    date
  );
}

/**
 *
 * Check if the date is after the dateToCompare
 *
 * @param {!Date} date date
 * @param {!Date} dateToCompare date to compare
 * @returns {boolean} true if date is after the dateToCompare
 */
export function isAfter(
  date: Date,
  dateToCompare: Date
): boolean {
  return new DateFunctions(new DateUtilMoment()).isAfter(
    date,
    dateToCompare
  );
}

/**
 *
 * Check if the date is before the dateToCompare
 *
 * @param {!Date} date date
 * @param {!Date} dateToCompare date to compare
 * @returns {boolean} true if date is before the dateToCompare
 */
export function isBefore(
  date: Date,
  dateToCompare: Date
): boolean {
  return new DateFunctions(new DateUtilMoment()).isBefore(
    date,
    dateToCompare
  );
}

/**
 *
 * Get the date you pass with time to 23:59:59:999.99
 *
 * @param {!Date} date date
 * @returns {!Date} date with end time
 */
export function setEndTime(date: Date): Date {
  return new DateFunctions(new DateUtilMoment()).setEndTime(date);
}

/**
 *
 * Get the date you pass with time to 00:00:00:000.00
 *
 * @param {!Date} date date
 * @returns {!Date} date with init time
 */
export function setInitTime(date: Date): Date {
  return new DateFunctions(new DateUtilMoment()).setInitTime(date);
}

/**
 *
 * Get date with subtracted days
 *
 * @param {!number} daysToSubtract number of days to subtract
 * @param {Date} [date=new Date()] date to which the days are subtract, current date by default
 * @returns {Date} date with subtracted days
 */
export function subtractDays(daysToSubtract: number, date: Date = new Date()): Date {
  return new DateFunctions(new DateUtilMoment()).subtractDays(daysToSubtract, date);
}

/**
 *
 * Get date with subtracted months
 *
 * @param {!number} monthsToSubtract number of months to subtract
 * @param {Date} [date=new Date()] date to which the months are subtract, current date by default
 * @returns {Date} date with subtracted months
 */
export function subtractMonths(monthsToSubtract: number, date: Date = new Date()): Date {
  return new DateFunctions(new DateUtilMoment()).subtractMonths(
    monthsToSubtract,
    date
  );
}

/**
 *
 * Get date with subtracted years
 *
 * @param {!number} yearsToSubtract number of years to subtract
 * @param {Date} [date=new Date()] date to which the years are subtract, current date by default
 * @returns {Date} date with subtracted years
 */
export function subtractYears(yearsToSubtract: number, date: Date = new Date()): Date {
  return new DateFunctions(new DateUtilMoment()).subtractYears(
    yearsToSubtract,
    date
  );
}
