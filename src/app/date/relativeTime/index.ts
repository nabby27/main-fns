import { Locale } from '../types/locale';
import { RelativeTimeOwn } from './impl/relativeTimeOwn';
import { RelativeTimeFunction } from './util/relativeTime.function';

/**
 *
 */
export function relativeTime(date: Date, locale: Locale = 'en-US'): string {
  return new RelativeTimeFunction(new RelativeTimeOwn()).relativeTime(date, locale);
}
