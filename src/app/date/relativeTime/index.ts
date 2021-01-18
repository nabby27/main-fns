import { Locale } from '../types/locale';
import { RelativeTimeOwn } from './impl/relativeTimeOwn';
import { RelativeTimeFunction } from './util/relativeTime.function';

/**
 *
 * Returns the relative time from date
 *
 * @param {!Date} date - The date to compare relative time
 * @param {Locale} [locale='en-US'] - The locale to return string, by default is `'en-US'`
 * @returns {string} The relative time on locale format
 *
 * @example
 *
 * // if current date is new Date(1996, 05, 27)
 *
 * const myDate = new Date(1996, 05, 26)
 * console.log(relativeTime(myDate)) // 'yesterday'
 */
export function relativeTime(date: Date, locale: Locale = 'en-US'): string {
  return new RelativeTimeFunction(new RelativeTimeOwn()).relativeTime(date, locale);
}
