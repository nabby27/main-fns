import { Locale } from '../../types/locale';

export interface RelativeTime {
  relativeTime(date: Date, locale: Locale): string;
}
