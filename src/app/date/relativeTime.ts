import { Locale } from './types/locale';

/**
 *
 * @memberof module:Date
 * @function relativeTime
 *
 * @description Returns the relative time from date
 *
 * @param {!Date} date - The date to compare relative time
 * @param {Locale} [locale='en-US'] - The locale to return string, by default is `'en-US'`
 * @returns {string} The relative time on locale format
 *
 * @example
 * import { relativeTime } from 'main-fns';
 *
 * // if current date is new Date(1996, 05, 27)
 * const myDate = new Date(1996, 05, 26);
 * console.log(relativeTime(myDate)); // 'yesterday'
 */
const unitsInMilliseconds: { unit: Intl.RelativeTimeFormatUnit, inMilliseconds: number }[] = [
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
        inMilliseconds: 24 * 60 * 60 * 1000 * 365 / 12
    },
    {
        unit: 'year',
        inMilliseconds: 24 * 60 * 60 * 1000 * 365
    }
];

export function relativeTime(date: Date, locale: Locale = 'en-US'): string {
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

    const elapsed: number = date.getTime() - new Date().getTime();

    return unitsInMilliseconds.reduce((acc, el) => {
        if (Math.abs(elapsed) >= el.inMilliseconds) {
            return rtf.format(Math.round(elapsed / el.inMilliseconds), el.unit);
        }

        return acc;
    }, '');
}
