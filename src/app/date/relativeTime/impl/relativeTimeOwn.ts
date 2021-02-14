import { Locale } from '../../types/locale';
import { RelativeTime } from '../util/relativeTime.interface';

export class RelativeTimeOwn implements RelativeTime {

  private unitsInMilliseconds: {unit: Intl.RelativeTimeFormatUnit, inMilliseconds: number}[] = [
      {
          unit: 'second',
          inMilliseconds: 1000
      },
      {
          unit: 'minute',
          inMilliseconds: 60 * 1000
      },
      {
          unit: 'hour',
          inMilliseconds: 60 * 60 * 1000
      },
      {
          unit: 'day',
          inMilliseconds: 24 * 60 * 60 * 1000
      },
      {
          unit: 'month',
          inMilliseconds: 24 * 60 * 60 * 1000 * 365/12
      },
      {
          unit: 'year',
          inMilliseconds: 24 * 60 * 60 * 1000 * 365
      }
  ];

  relativeTime(date: Date, locale: Locale): string {
      const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

      const elapsed: number = date.getTime() - new Date().getTime();

      return this.unitsInMilliseconds.reduce((acc, el) => {
          if (Math.abs(elapsed) >= el.inMilliseconds) {
              return rtf.format(Math.round(elapsed/el.inMilliseconds), el.unit);
          }

          return acc;
      }, '');
  }

}
